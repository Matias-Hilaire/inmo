import { NextRequest, NextResponse } from "next/server";
import getDB from "@/util/db";
import { getServerSession } from "next-auth";

const db = getDB();

/**
 * 🔹 API para obtener propiedades
 */
export async function GET(request) {
  try {
    const url = new URL(request.url);
    const search = (url.searchParams.get("search") || "").toLowerCase();
    let result = [];

    if (search.trim() !== "") {
      const statement = db.prepare(`
        SELECT DISTINCT p.*, i.url AS imageUrl
        FROM propiedades p
        LEFT JOIN imagenes i ON i.propiedadId = p.id
        WHERE LOWER(p.address) LIKE ?
        OR LOWER(p.description) LIKE ?
      `);
      result = statement.all(`%${search}%`, `%${search}%`);
    } else {
      const statement = db.prepare(`
        SELECT DISTINCT p.*, i.url AS imageUrl
        FROM propiedades p
        LEFT JOIN imagenes i ON i.propiedadId = p.id
      `);
      result = statement.all();
    }

    return NextResponse.json({ status: 200, result });
  } catch (error) {
    console.error("❌ Error en la API GET:", error);
    return NextResponse.json({
      status: 500,
      message: "Error interno del servidor",
      result: [],
    });
  }
}

/**
 * 🔹 API para agregar una propiedad (Modificada para permitir múltiples propiedades por usuario)
 */
export async function POST(req) {
  try {
    console.log("Iniciando POST /api/creacion/propiedad");

    const session = await getServerSession();
    console.log("Sesión obtenida:", session);

    if (!session || !session.user) {
      console.log("❌ Error: No hay sesión o usuario no autenticado.");
      return NextResponse.json({ status: 403, message: "Unauthorized" });
    }

    const user = session.user.name;
    console.log("Usuario autenticado:", user);

    // Verificar que el usuario existe en la BD
    const userCheckStmt = db.prepare(
      "SELECT id_usuario FROM usuario WHERE username = ?"
    );
    const userRow = userCheckStmt.get(user);
    console.log("Usuario encontrado en BD:", userRow);

    if (!userRow) {
      console.log("❌ Error: Usuario no encontrado en la base de datos.");
      return NextResponse.json({
        status: 400,
        message: "Usuario no encontrado en la base de datos.",
      });
    }

    // Obtener los datos del formulario
    const data = await req.formData();
    console.log(
      "Datos recibidos en el formulario:",
      Object.fromEntries(data.entries())
    );

    const address = data.get("address")?.trim();
    const price = parseFloat(data.get("price"));
    const size = parseFloat(data.get("size"));
    const bedrooms = parseInt(data.get("bedrooms"));
    const description = data.get("description")?.trim();
    const typeId = parseInt(data.get("typeId"));
    const latitude = parseFloat(data.get("latitude"));
    const longitude = parseFloat(data.get("longitude"));

    console.log("Datos procesados:", {
      address,
      price,
      size,
      bedrooms,
      description,
      typeId,
      latitude,
      longitude,
    });

    if (
      !address ||
      isNaN(price) ||
      isNaN(size) ||
      isNaN(bedrooms) ||
      !description ||
      isNaN(typeId) ||
      isNaN(latitude) ||
      isNaN(longitude)
    ) {
      console.log("❌ Error: Datos inválidos en la solicitud.");
      return NextResponse.json({
        status: 400,
        message: "Datos inválidos en la solicitud.",
      });
    }

    // Insertar nueva propiedad en la BD (SIN RESTRICCIÓN de una propiedad por usuario)
    const statement = db.prepare(`
      INSERT INTO propiedades (address, price, size, bedrooms, description, typeId, latitude, longitude, id_usuario)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);
    `);

    statement.run(
      address,
      price,
      size,
      bedrooms,
      description,
      typeId,
      latitude,
      longitude,
      userRow.id_usuario
    );
    console.log("✅ Propiedad insertada exitosamente");

    return NextResponse.json({
      status: 200,
      message: "Propiedad creada exitosamente.",
    });
  } catch (error) {
    console.error("❌ Error en la API POST:", error);
    return NextResponse.json({
      status: 500,
      message: `Error interno del servidor: ${error.message}`,
    });
  }
}
