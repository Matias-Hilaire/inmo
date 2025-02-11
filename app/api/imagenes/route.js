import getDB from "@/util/db";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import fs from "fs";

const db = getDB();

export async function GET(req) {
  try {
    const url = new URL(req.url);
    const propiedadId = url.searchParams.get("propiedadId");

    if (!propiedadId) {
      return NextResponse.json({ status: "400", message: "Propiedad no especificada" });
    }

    const stmt = db.prepare("SELECT * FROM imagenes WHERE propiedadId = ?");
    const final_result = stmt.all(propiedadId);

    return NextResponse.json({ status: "200", final_result });
  } catch (error) {
    console.error("❌ Error en la API GET:", error);
    return NextResponse.json({ status: "500", message: "Error interno del servidor." });
  }
}


export async function POST(req) {
  try {
    const session = await getServerSession();
    if (!session || !session.user) {
      return NextResponse.json({ status: "403", message: "Unauthorized" });
    }

    const form = await req.formData();
    const propiedadId = form.get("propiedadId");
    const files = form.getAll("imagen"); 

    if (!propiedadId || files.length === 0) {
      return NextResponse.json({ status: "400", message: "Datos incompletos" });
    }

    const propiedadStmt = db.prepare("SELECT id FROM propiedades WHERE id = ?");
    const propiedad = propiedadStmt.get(propiedadId);
    if (!propiedad) {
      return NextResponse.json({ status: "404", message: "Propiedad no encontrada" });
    }

    const uploadDir = path.join(process.cwd(), "public/uploads");
    if (!fs.existsSync(uploadDir)) {
      await mkdir(uploadDir, { recursive: true });
    }

    const urls = [];
    for (const file of files) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const fileName = `${Date.now()}-${file.name.replace(/\s/g, "_")}`;
      const filePath = path.join(uploadDir, fileName);

      await writeFile(filePath, buffer);
      const imageUrl = `/uploads/${fileName}`;
      urls.push(imageUrl);

      const stmt = db.prepare("INSERT INTO imagenes (propiedadId, url, descripcion) VALUES (?, ?, ?)");
      stmt.run(propiedadId, imageUrl, "Imagen de la propiedad");
    }

    return NextResponse.json({ status: "200", message: "Imágenes registradas correctamente", urls });
  } catch (error) {
    console.error("❌ Error en la API POST:", error);
    return NextResponse.json({ status: "500", message: "Error interno del servidor." });
  }
}


export async function DELETE(req) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json({ status: "400", message: "ID de imagen no especificado" });
    }

    const stmt = db.prepare("SELECT url FROM imagenes WHERE id = ?");
    const imagen = stmt.get(id);

    if (imagen) {
      const filePath = path.join(process.cwd(), "public", imagen.url);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }

    const deleteStmt = db.prepare("DELETE FROM imagenes WHERE id = ?");
    deleteStmt.run(id);

    return NextResponse.json({ status: "200", message: "Imagen eliminada correctamente" });
  } catch (error) {
    console.error("❌ Error al eliminar la imagen:", error);
    return NextResponse.json({ status: "500", message: "Error interno del servidor." });
  }
}
