import Database from "better-sqlite3";

let db;

export default function getDB() {
  if (!db) {
    db = new Database("inmobiliaria.db");
    db.pragma("foreign_keys = ON");

    // Tabla de usuarios con rol
    db.prepare(`
      CREATE TABLE IF NOT EXISTS usuario (
          id_usuario TEXT PRIMARY KEY,
          rol INTEGER,
          username TEXT UNIQUE NOT NULL,
          password TEXT NOT NULL
      );
    `).run();

    // Tabla de propiedades conectada con usuario mediante FK id_usuario
    db.prepare(`
      CREATE TABLE IF NOT EXISTS propiedades (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          address TEXT NOT NULL,
          price REAL NOT NULL,
          size REAL NOT NULL,
          bedrooms INTEGER NOT NULL,
          description TEXT NOT NULL,
          typeId INTEGER,
          latitude REAL,
          longitude REAL,
          id_usuario TEXT,
          FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario) ON DELETE CASCADE
      );
    `).run();

    // Tabla de imágenes
    db.prepare(`
      CREATE TABLE IF NOT EXISTS imagenes (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          propiedadId INTEGER,
          url TEXT NOT NULL,
          descripcion TEXT,
          FOREIGN KEY (propiedadId) REFERENCES propiedades(id) ON DELETE CASCADE
      );
    `).run();

    // Tabla de roles
    db.prepare(`
      CREATE TABLE IF NOT EXISTS roles (
          id_rol INTEGER PRIMARY KEY AUTOINCREMENT,
          nombre TEXT NOT NULL
      );
    `).run();
  }
  return db;
}

// Ejecutar automáticamente para crear la base de datos si no existe
getDB();
