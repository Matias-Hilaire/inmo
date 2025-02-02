import getDB from "@/util/db";
import { NextResponse } from "next/server";

const db = getDB();

export async function GET(req, slug) {
  console.log("Slug recibido en servidor:", slug);

  // Verifica que `slug.params.listado` no sea undefined o vacío
  if (!slug.params.listado || slug.params.listado.length === 0) {
    return NextResponse.json({ status: 400, message: "ID de propiedad no proporcionado" });
  }

  const id = slug.params.listado[0];

  if (!id) {
    return NextResponse.json({ status: 400, message: "ID de propiedad inválido" });
  }

  const propiedad = db.prepare(`
    SELECT p.*
    FROM propiedades p
    WHERE p.id = ?
  `).get(id);

  if (!propiedad) {
    return NextResponse.json({ status: 404, message: "Propiedad no encontrada" });
  }

  const imagenes = db.prepare(`
    SELECT i.url, i.descripcion
    FROM imagenes i
    WHERE i.propiedadId = ?
  `).all(id);

  const result = {
    nombre_propiedad: propiedad.address,
    descripcion: propiedad.description,
    precio: propiedad.price,
    tamano: propiedad.size,
    habitaciones: propiedad.bedrooms,
    tipo: propiedad.typeId,
    ubicacion: { latitud: propiedad.latitude, longitud: propiedad.longitude },
    imagenes: imagenes.map((img) => ({ url: img.url, descripcion: img.descripcion })),
  };

  return NextResponse.json({ status: 200, result });
}
