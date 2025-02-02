"use client";

import "@/app/globals.css";
import { useEffect, useState } from "react";
import ThreeBarMenu from "@/app/ThreeBarMenu";

export default function Propiedad({ params }: { params: { propiedad: string | string[] } }) {
  const [isLoading, setIsLoading] = useState(true);
  const [props, changeProps] = useState({
    title: "Cargando...",
    desc: "Cargando...",
    ubicacion: { latitud: "Cargando...", longitud: "Cargando..." },
    imagenes: [],
  });

  useEffect(() => {
    async function GetProps() {
      console.log("Params recibidos en el cliente:", params);

      // Valida que `params.propiedad` no esté vacío
      const propiedadId = Array.isArray(params.propiedad) ? params.propiedad[0] : params.propiedad;

      if (!propiedadId) {
        console.error("ID de propiedad no válido o no recibido:", params.propiedad);
        setIsLoading(false);
        return;
      }

      try {
        const req = await fetch(`/api/listado/${propiedadId}`, { method: "GET" });

        if (!req.ok) {
          throw new Error("Error al obtener los datos de la API");
        }

        const data = await req.json();

        changeProps({
          title: data.result.nombre_propiedad || "No existen Items",
          desc: data.result.descripcion || "No existen Items",
          ubicacion: {
            latitud: data.result.ubicacion?.latitud || "No disponible",
            longitud: data.result.ubicacion?.longitud || "No disponible",
          },
          imagenes: data.result.imagenes || [],
        });
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      } finally {
        setIsLoading(false);
      }
    }

    GetProps();
  }, [params.propiedad]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-2xl text-gray-500">Cargando datos de la propiedad...</p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-slate-300 to-slate-100 w-full h-screen flex flex-col items-center">
      <div className="absolute left-0 top-">
        <ThreeBarMenu />
      </div>
      <h1 className="text-cyan-700 xl:text-6xl md:text-5xl sm:text-4xl font-bold text-center m-6">
        {props.title}
      </h1>
      <p className="text-2xl text-gray-700 mt-4">{props.desc}</p>
      <p className="text-xl text-gray-600 mt-2 italic">
        Latitud: {props.ubicacion.latitud}, Longitud: {props.ubicacion.longitud}
      </p>
      <div className="w-[90%] md:w-[70%] lg:w-[60%] flex flex-col items-center mt-8">
        <table className="w-full table-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <thead className="bg-cyan-600 text-white">
            <tr>
              <th className="px-6 py-3">Imagen</th>
              <th className="px-6 py-3">Descripción</th>
            </tr>
          </thead>
          <tbody>
            {props.imagenes.length > 0 ? (
              props.imagenes.map((imagen: any, index: number) => (
                <tr key={index} className="even:bg-slate-100">
                  <td className="text-center px-6 py-4 border-b">
                    <img
                      src={imagen.url}
                      alt={imagen.descripcion}
                      className="w-20 h-20 object-cover"
                    />
                  </td>
                  <td className="text-black text-center px-6 py-4 border-b">
                    {imagen.descripcion}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={2} className="text-center text-gray-500 py-6">
                  No hay imágenes disponibles.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
