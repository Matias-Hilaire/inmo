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
    <div className="bg-white w-full min-h-screen flex flex-col items-center p-6">
      <div className="absolute left-0 top-0">
        <ThreeBarMenu />
      </div>

      <h1 className="text-[#005397] text-4xl font-bold mb-6">Administrador de Imágenes</h1>

      <select
        onChange={(e) => setPropiedadSeleccionada(e.target.value)}
        value={propiedadSeleccionada}
        className="mb-6 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#005397]"
      >
        <option value="">Selecciona una propiedad</option>
        {propiedades.map((prop) => (
          <option key={prop.id} value={prop.id}>
            {prop.address}
          </option>
        ))}
      </select>

      <form onSubmit={cargarImagen} className="mb-8 flex flex-col items-center">
        <input
          type="file"
          name="imagen"
          required
          className="mb-4 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#005397]"
        />
        <button
          type="submit"
          className="bg-[#005397] text-white px-6 py-2 rounded-md shadow-lg hover:bg-blue-800"
        >
          Subir Imagen
        </button>
      </form>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
        {imagenes.map((img) => (
          <div key={img.id} className="relative group">
            <img
              src={img.url}
              alt="Imagen Propiedad"
              className="w-full h-48 object-cover rounded-md shadow-md"
            />
            <button
              onClick={() => eliminarImagen(img.id)}
              className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
