"use client";

import React, { useEffect, useState } from "react";
import ThreeBarMenu from "@/app/ThreeBarMenu";
import { getSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AdministradorPropiedades() {
  const [imagenes, setImagenes] = useState<any[]>([]);
  const [propiedades, setPropiedades] = useState<any[]>([]);
  const [propiedadSeleccionada, setPropiedadSeleccionada] = useState("");
  const [propiedadData, setPropiedadData] = useState({
    address: "",
    price: "",
    description: "",
  });

  const router = useRouter();

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

  async function cargarImagenes() {
    if (!propiedadSeleccionada) return;
    const response = await fetch(`/api/imagenes?propiedadId=${propiedadSeleccionada}`);
    const data = await response.json();
    setImagenes(data.final_result);
  }

  async function cargarDatosPropiedad(id: string) {
    if (!id) return;
    const response = await fetch(`/api/listado/${id}`);
    const data = await response.json();
    setPropiedadData({
      address: data.result.address || "",
      price: data.result.price || "",
      description: data.result.description || "",
    });
  }

  async function actualizarPropiedad(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const response = await fetch(`/api/creacion/propiedad`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: propiedadSeleccionada,
        ...propiedadData,
      }),
    });

    if (response.ok) {
      alert("Propiedad actualizada correctamente");
      cargarPropiedades();
    } else {
      alert("Error al actualizar la propiedad");
    }
  }

  async function cargarImagen(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.append("propiedadId", propiedadSeleccionada);

    const response = await fetch("/api/imagenes", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      alert("Imágenes subidas correctamente");
      cargarImagenes();
    } else {
      alert("Error al subir las imágenes");
    }
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
    cargarDatosPropiedad(propiedadSeleccionada);
  }, [propiedadSeleccionada]);

  return (
    <div className="bg-white w-full min-h-screen flex flex-col items-center p-6">
      <div className="absolute left-0 top-0">
        <ThreeBarMenu />
      </div>

      <h1 className="text-[#005397] text-4xl font-bold mb-6">Administrador de Propiedades</h1>

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

      {propiedadSeleccionada && (
        <>
          <form
            onSubmit={cargarImagen}
            className="mb-8 flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md w-full max-w-3xl"
          >
            <h2 className="text-2xl text-[#005397] font-semibold mb-4">Agregar Imágenes</h2>
            <input
              type="file"
              name="imagen"
              required
              multiple
              className="mb-4 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#005397]"
            />
            <button
              type="submit"
              className="bg-[#005397] text-white px-6 py-2 rounded-md shadow-lg hover:bg-blue-800"
            >
              Subir Imágenes
            </button>
          </form>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-3xl mb-6">
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

          <form
            onSubmit={actualizarPropiedad}
            className="w-full max-w-3xl bg-gray-100 p-6 rounded-lg shadow-md"
          >
            <h2 className="text-2xl text-[#005397] font-semibold mb-4">Editar Propiedad</h2>

            <label className="block text-lg text-gray-700">Dirección</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md mb-4"
              value={propiedadData.address}
              onChange={(e) => setPropiedadData({ ...propiedadData, address: e.target.value })}
              required
            />

            <label className="block text-lg text-gray-700">Precio</label>
            <input
              type="number"
              className="w-full p-2 border border-gray-300 rounded-md mb-4"
              value={propiedadData.price}
              onChange={(e) => setPropiedadData({ ...propiedadData, price: e.target.value })}
              required
            />

            <label className="block text-lg text-gray-700">Descripción</label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded-md mb-4"
              value={propiedadData.description}
              onChange={(e) => setPropiedadData({ ...propiedadData, description: e.target.value })}
              required
            />

            <div className="flex justify-between">
              <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
                Guardar Cambios
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}
