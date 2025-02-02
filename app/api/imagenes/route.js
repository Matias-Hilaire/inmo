import getDB from "@/util/db";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import fs from "fs";

const db = getDB();

/**
 * GET - Obtener imágenes de una propiedad específica
 */
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

/**
 * POST - Agregar una imagen a una propiedad
 */
export async function POST(req) {
  try {
    const session = await getServerSession();
    if (!session || !session.user) {
      return NextResponse.json({ status: "403", message: "Unauthorized" });
    }

    const form = await req.formData();
    const propiedadId = form.get("propiedadId");
    const file = form.get("imagen");

    if (!propiedadId || !file) {
      return NextResponse.json({ status: "400", message: "Datos incompletos" });
    }

    // Asegurar que la propiedad existe en la base de datos
    const propiedadStmt = db.prepare("SELECT id FROM propiedades WHERE id = ?");
    const propiedad = propiedadStmt.get(propiedadId);
    if (!propiedad) {
      return NextResponse.json({ status: "404", message: "Propiedad no encontrada" });
    }

    // 📌 Verificar si la carpeta `public/uploads` existe, si no, crearla
    const uploadDir = path.join(process.cwd(), "public/uploads");
    if (!fs.existsSync(uploadDir)) {
      await mkdir(uploadDir, { recursive: true });
    }

    // 📌 Guardar la imagen en el servidor
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const fileName = `${Date.now()}-${file.name.replace(/\s/g, "_")}`;
    const filePath = path.join(uploadDir, fileName);
    
    await writeFile(filePath, buffer);
    const imageUrl = `/uploads/${fileName}`;

    // 📌 Guardar la imagen en la base de datos
    const stmt = db.prepare("INSERT INTO imagenes (propiedadId, url, descripcion) VALUES (?, ?, ?)");
    stmt.run(propiedadId, imageUrl, "Imagen de la propiedad");

    return NextResponse.json({ status: "200", message: "Imagen registrada correctamente", url: imageUrl });
  } catch (error) {
    console.error("❌ Error en la API POST:", error);
    return NextResponse.json({ status: "500", message: "Error interno del servidor." });
  }
}

/**
 * DELETE - Eliminar una imagen
 */
export async function DELETE(req) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json({ status: "400", message: "ID de imagen no especificado" });
    }

    // Obtener la URL de la imagen antes de eliminarla
    const stmt = db.prepare("SELECT url FROM imagenes WHERE id = ?");
    const imagen = stmt.get(id);

    if (imagen) {
      const filePath = path.join(process.cwd(), "public", imagen.url);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }

    // Eliminar de la base de datos
    const deleteStmt = db.prepare("DELETE FROM imagenes WHERE id = ?");
    deleteStmt.run(id);

    return NextResponse.json({ status: "200", message: "Imagen eliminada correctamente" });
  } catch (error) {
    console.error("❌ Error al eliminar la imagen:", error);
    return NextResponse.json({ status: "500", message: "Error al eliminar la imagen" });
  }
}
