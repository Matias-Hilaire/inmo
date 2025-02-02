"use client";
import React, { useEffect, useState } from "react";
import ThreeBarMenu from "@/app/ThreeBarMenu";
import { getSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AdministradorImagenes() {
  const [imagenes, setImagenes] = useState<any[]>([]);
  const [propiedades, setPropiedades] = useState<any[]>([]);
  const [propiedadSeleccionada, setPropiedadSeleccionada] = useState("");
  const router = useRouter();

  async function cargarImagen(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.append("propiedadId", propiedadSeleccionada);

    const response = await fetch("/api/imagenes", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      alert("Imagen subida correctamente");
      cargarImagenes();
    } else {
      alert("Error al subir la imagen");
    }
  }

  async function cargarImagenes() {
    if (!propiedadSeleccionada) return;
    const response = await fetch(`/api/imagenes?propiedadId=${propiedadSeleccionada}`);
    const data = await response.json();
    setImagenes(data.final_result);
  }

  async function cargarPropiedades() {
    const session = await getSession();
    if (!session) {
      router.push("/");
      return;
    }

    const response = await fetch("/api/creacion/propiedad");
    const data = await response.json();
    setPropiedades(data.result);
  }

  async function eliminarImagen(id: number) {
    const confirmacion = window.confirm("¿Estás seguro de que deseas eliminar esta imagen?");
    if (!confirmacion) return;

    const response = await fetch("/api/imagenes", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    if (response.ok) {
      alert("Imagen eliminada exitosamente");
      cargarImagenes();
    } else {
      alert("Error al eliminar la imagen");
    }
  }

  useEffect(() => {
    cargarPropiedades();
  }, []);

  useEffect(() => {
    cargarImagenes();
  }, [propiedadSeleccionada]);

  return (
    <div className="bg-slate-300 w-[100%] h-[100%] flex flex-col md:flex-row gap-4 shadow-md p-10">
      <div className="absolute left-0 top-0">
        <ThreeBarMenu />
      </div>

      <div className="w-full flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-5">Administrador de Imágenes</h1>

        <select
          onChange={(e) => setPropiedadSeleccionada(e.target.value)}
          value={propiedadSeleccionada}
          className="mb-4 p-2 border border-gray-500"
        >
          <option value="">Selecciona una propiedad</option>
          {propiedades.map((prop) => (
            <option key={prop.id} value={prop.id}>
              {prop.address}
            </option>
          ))}
        </select>

        <form onSubmit={cargarImagen} className="mb-5">
          <input type="file" name="imagen" required className="mb-3" />
          <button type="submit" className="bg-cyan-600 text-white px-4 py-2 rounded">
            Subir Imagen
          </button>
        </form>

        <div className="grid grid-cols-3 gap-4">
          {imagenes.map((img) => (
            <div key={img.id} className="relative">
              <img src={img.url} alt="Imagen Propiedad" className="w-full h-auto rounded" />
              <button
                onClick={() => eliminarImagen(img.id)}
                className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded"
              >
                X
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
