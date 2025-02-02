import getDB from "@/util/db";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

const db = getDB();

export async function GET() {
    try {
        const session = await getServerSession();
        console.log(session);

        if (!session || !session.user) {
            return NextResponse.json({ status: "403", message: "Unauthorized" });
        }

        const name = session.user.name;
        console.log("Usuario autenticado:", name);

        // Obtener ID del usuario en la base de datos
        const stmt = db.prepare("SELECT id_usuario FROM usuario WHERE username = ?");
        const userRow = stmt.get(name);

        if (!userRow) {
            return NextResponse.json({ status: "404", message: "Usuario no encontrado en la base de datos." });
        }

        const get_id = userRow.id_usuario;

        // Buscar la propiedad del usuario
        const stmt_propiedad = db.prepare("SELECT * FROM propiedades WHERE id_usuario = ?");
        const final_result = stmt_propiedad.get(get_id);

        if (!final_result) {
            return NextResponse.json({ status: "404", message: "No se encontró ninguna propiedad registrada para este usuario." });
        }

        return NextResponse.json({ status: "200", final_result });
    } catch (error) {
        console.error("❌ Error en la API GET:", error);
        return NextResponse.json({ status: "500", message: "Error interno del servidor." });
    }
}
