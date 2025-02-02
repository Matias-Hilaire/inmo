"use client";

import { useState } from "react";
import ThreeBarMenu from "@/app/ThreeBarMenu";

export default function RegistrarPropiedad() {
  const [status, changeStatus] = useState("Enviar");

  async function Submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    changeStatus("Enviando...");
    const formdata = new FormData(e.currentTarget);

    try {
      const response = await fetch("/api/creacion/propiedad", {
        method: "POST",
        body: formdata,
        cache: "no-store",
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        console.error("Error al registrar propiedad:", data?.message || "Error desconocido");
        changeStatus("Error al registrar propiedad");
        return;
      }

      changeStatus("Propiedad registrada exitosamente");
    } catch (error) {
      console.error("Error inesperado:", error);
      changeStatus("Error al registrar propiedad");
    }
  }

  return (
    <div className="bg-cyan-500 w-full h-screen fixed rounded-lg shadow-md p-10 overflow-y-auto">
      <div className="absolute left-0">
        <ThreeBarMenu />
      </div>

      <h1 className="text-6xl text-center mt-5 text-white font-bold">
        Registra tu Propiedad
      </h1>

      <form
        onSubmit={Submit}
        className="grid gap-8 grid-cols-2 mt-10 text-white w-full max-w-4xl mx-auto"
      >
        <label htmlFor="address" className="text-2xl text-right">
          Dirección:
        </label>
        <input
          type="text"
          className="w-full p-3 rounded-lg text-black"
          id="address"
          name="address"
          placeholder="Ej: Av. Principal 123"
          required
        />

        <label htmlFor="price" className="text-2xl text-right">
          Precio:
        </label>
        <input
          type="number"
          className="w-full p-3 rounded-lg text-black"
          id="price"
          name="price"
          placeholder="Ej: 250000"
          required
        />

        <label htmlFor="size" className="text-2xl text-right">
          Tamaño (m²):
        </label>
        <input
          type="number"
          className="w-full p-3 rounded-lg text-black"
          id="size"
          name="size"
          placeholder="Ej: 120"
          required
        />

        <label htmlFor="bedrooms" className="text-2xl text-right">
          Habitaciones:
        </label>
        <input
          type="number"
          className="w-full p-3 rounded-lg text-black"
          id="bedrooms"
          name="bedrooms"
          placeholder="Ej: 3"
          required
        />

        <label htmlFor="description" className="text-2xl text-right">
          Descripción:
        </label>
        <input
          type="text"
          className="w-full p-3 rounded-lg text-black"
          id="description"
          name="description"
          placeholder="Ej: Hermosa casa en el centro"
          required
        />

        <label htmlFor="latitude" className="text-2xl text-right">
          Latitud:
        </label>
        <input
          type="number"
          step="any"
          className="w-full p-3 rounded-lg text-black"
          id="latitude"
          name="latitude"
          placeholder="Ej: -34.6037"
          required
        />

        <label htmlFor="longitude" className="text-2xl text-right">
          Longitud:
        </label>
        <input
          type="number"
          step="any"
          className="w-full p-3 rounded-lg text-black"
          id="longitude"
          name="longitude"
          placeholder="Ej: -58.3816"
          required
        />

        <label htmlFor="typeId" className="text-2xl text-right">
          Tipo de Propiedad:
        </label>
        <select
          className="w-full p-3 rounded-lg text-black"
          id="typeId"
          name="typeId"
          required
        >
          <option value="">Selecciona un tipo</option>
          <option value="1">Casa</option>
          <option value="2">Departamento</option>
          <option value="3">Terreno</option>
          <option value="4">Comercial</option>
        </select>

        <div className="col-span-2 flex justify-center mt-10">
          <button
            className="w-1/2 p-3 rounded-full bg-cyan-500 text-3xl font-bold hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-600 transition-colors duration-300"
            type="submit"
          >
            {status}
          </button>
        </div>
      </form>
    </div>
  );
}
