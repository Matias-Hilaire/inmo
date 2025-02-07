import { NextRequest, NextResponse } from "next/server";
import getDB from "@/util/db";
import { getServerSession } from "next-auth";

const db = getDB();

/**
 * 🔹 GET - Obtener propiedades con imágenes agrupadas
 */
export async function GET(request) {
  try {
    const url = new URL(request.url);
    const search = (url.searchParams.get("search") || "").toLowerCase();
    let result = [];

    if (search.trim() !== "") {
      const statement = db.prepare(`
        SELECT p.*, GROUP_CONCAT(i.url) AS imageUrls
        FROM propiedades p
        LEFT JOIN imagenes i ON i.propiedadId = p.id
        WHERE LOWER(p.address) LIKE ?
        OR LOWER(p.description) LIKE ?
        GROUP BY p.id;
      `);
      result = statement.all(`%${search}%`, `%${search}%`);
    } else {
      const statement = db.prepare(`
        SELECT p.*, GROUP_CONCAT(i.url) AS imageUrls
        FROM propiedades p
        LEFT JOIN imagenes i ON i.propiedadId = p.id
        GROUP BY p.id;
      `);
      result = statement.all();
    }

    return NextResponse.json({ status: 200, result });
  } catch (error) {
    console.error("❌ Error en la API GET:", error);
    return NextResponse.json({ status: 500, message: "Error interno del servidor", result: [] });
  }
}

/**
 * 🔹 POST - Crear una nueva propiedad
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
    const userCheckStmt = db.prepare("SELECT id_usuario FROM usuario WHERE username = ?");
    const userRow = userCheckStmt.get(user);
    console.log("Usuario encontrado en BD:", userRow);

    if (!userRow) {
      console.log("❌ Error: Usuario no encontrado en la base de datos.");
      return NextResponse.json({ status: 400, message: "Usuario no encontrado en la base de datos." });
    }

    // Obtener los datos del formulario
    const data = await req.formData();
    console.log("Datos recibidos en el formulario:", Object.fromEntries(data.entries()));

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
      return NextResponse.json({ status: 400, message: "Datos inválidos en la solicitud." });
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

    return NextResponse.json({ status: 200, message: "Propiedad creada exitosamente." });
  } catch (error) {
    console.error("❌ Error en la API POST:", error);
    return NextResponse.json({ status: 500, message: `Error interno del servidor: ${error.message}` });
  }
}

/**
 * 🔹 PUT - Actualizar una propiedad existente
 */
export async function PUT(req) {
  try {
    console.log("Iniciando PUT /api/creacion/propiedad");

    const session = await getServerSession();
    if (!session || !session.user) {
      return NextResponse.json({ status: 403, message: "Unauthorized" });
    }

    const body = await req.json();
    const { id, price, description } = body;

    if (!id || isNaN(price) || !description) {
      return NextResponse.json({ status: 400, message: "Datos inválidos para actualizar" });
    }

    const updateStmt = db.prepare(`
      UPDATE propiedades SET price = ?, description = ? WHERE id = ?
    `);
    updateStmt.run(price, description, id);

    console.log("✅ Propiedad actualizada exitosamente");

    return NextResponse.json({ status: 200, message: "Propiedad actualizada correctamente." });
  } catch (error) {
    console.error("❌ Error en la API PUT:", error);
    return NextResponse.json({ status: 500, message: `Error interno del servidor: ${error.message}` });
  }
}

/**
 * 🔹 DELETE - Eliminar una propiedad
 */
export async function DELETE(req) {
  try {
    console.log("Iniciando DELETE /api/creacion/propiedad");

    const session = await getServerSession();
    if (!session || !session.user) {
      return NextResponse.json({ status: 403, message: "Unauthorized" });
    }

    const body = await req.json();
    const { id } = body;

    if (!id) {
      return NextResponse.json({ status: 400, message: "ID de propiedad no especificado" });
    }

    // Eliminar imágenes asociadas a la propiedad
    const deleteImagesStmt = db.prepare("DELETE FROM imagenes WHERE propiedadId = ?");
    deleteImagesStmt.run(id);

    // Eliminar propiedad
    const deletePropStmt = db.prepare("DELETE FROM propiedades WHERE id = ?");
    deletePropStmt.run(id);

    console.log("✅ Propiedad eliminada correctamente");

    return NextResponse.json({ status: 200, message: "Propiedad eliminada correctamente." });
  } catch (error) {
    console.error("❌ Error en la API DELETE:", error);
    return NextResponse.json({ status: 500, message: `Error interno del servidor: ${error.message}` });
  }
}
