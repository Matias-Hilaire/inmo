"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import ThreeBarMenu from "@/app/ThreeBarMenu";

export default function RegistrarPropiedad() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [statusMessage, changeStatusMessage] = useState("Enviar");

  useEffect(() => {
    if (status !== "loading" && !session) {
      setTimeout(() => {
        alert("Por favor, inicie sesión para registrar una propiedad.");
        router.push("/");
      }, 1500); // Espera 1.5 segundos antes de mostrar la alerta
    }
  }, [session, status, router]);

  async function Submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    changeStatusMessage("Enviando...");
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
        changeStatusMessage("Error al registrar propiedad");
        return;
      }

      changeStatusMessage("Propiedad registrada exitosamente");
    } catch (error) {
      console.error("Error inesperado:", error);
      changeStatusMessage("Error al registrar propiedad");
    }
  }

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-2xl text-gray-500">Verificando sesión...</p>
      </div>
    );
  }

  return (
    <div className="bg-white w-full h-screen fixed p-10 overflow-y-auto">
      <div className="absolute left-0">
        <ThreeBarMenu />
      </div>

      <h1 className="text-[#005397] text-5xl text-center mt-5 font-bold">
        Registrar Propiedad
      </h1>

      <form
        onSubmit={Submit}
        className="grid gap-8 grid-cols-2 mt-10 text-gray-800 w-full max-w-4xl mx-auto"
      >
        <label htmlFor="address" className="text-2xl text-right">
          Dirección:
        </label>
        <input
          type="text"
          className="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-[#005397]"
          id="address"
          name="address"
          placeholder="Ej: Av. Principal 123"
          required
        />

        <label htmlFor="price" className="text-2xl text-right">
          Precio u$d:
        </label>
        <input
          type="number"
          className="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-[#005397]"
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
          className="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-[#005397]"
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
          className="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-[#005397]"
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
          className="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-[#005397]"
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
          className="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-[#005397]"
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
          className="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-[#005397]"
          id="longitude"
          name="longitude"
          placeholder="Ej: -58.3816"
          required
        />

        <label htmlFor="typeId" className="text-2xl text-right">
          Tipo de Propiedad:
        </label>
        <select
          className="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-[#005397]"
          id="typeId"
          name="typeId"
          required
        >
          <option value="">Selecciona un tipo</option>
          <option value="1">Casa</option>
          <option value="2">Departamento</option>
          <option value="3">Campo</option>
          <option value="4">Lote</option>
          <option value="5">Local</option>
          <option value="6">Hotel/Bungalows</option>
        </select>

        <div className="col-span-2 flex justify-center mt-10">
          <button
            className="w-1/2 p-3 rounded-full bg-[#005397] text-white text-2xl font-bold hover:bg-blue-800 transition-colors duration-300 shadow-lg"
            type="submit"
          >
            {statusMessage}
          </button>
        </div>
      </form>
    </div>
  );
}
