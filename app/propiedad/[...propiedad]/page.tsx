"use client";

import "@/app/globals.css";
import { useEffect, useState } from "react";
import ThreeBarMenu from "@/app/ThreeBarMenu";
import Mapa from "@/app/mapa";

interface Imagen {
  url: string;
  descripcion: string;
}

export default function Propiedad({ params }: { params: { propiedad: string | string[] } }) {
  const [isLoading, setIsLoading] = useState(true);
  const [currentImage, setCurrentImage] = useState<string>("");
  const [imageIndex, setImageIndex] = useState(0);
  const [props, changeProps] = useState({
    title: "Cargando...",
    desc: "Cargando...",
    ubicacion: { latitud: 0, longitud: 0 },
    imagenes: [] as Imagen[],
  });

  useEffect(() => {
    async function GetProps() {
      const propiedadId = Array.isArray(params.propiedad) ? params.propiedad[0] : params.propiedad;
      if (!propiedadId) {
        setIsLoading(false);
        return;
      }

      try {
        const req = await fetch(`/api/listado/${propiedadId}`);
        if (!req.ok) throw new Error("Error al obtener los datos de la API");

        const data = await req.json();
        const imagenes: Imagen[] = data.result.imagenes || [];

        changeProps({
          title: data.result.nombre_propiedad || "No existen Items",
          desc: data.result.descripcion || "No existen Items",
          ubicacion: {
            latitud: data.result.ubicacion?.latitud || 0,
            longitud: data.result.ubicacion?.longitud || 0,
          },
          imagenes,
        });

        if (imagenes.length > 0) {
          setCurrentImage(imagenes[0].url);
        }
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      } finally {
        setIsLoading(false);
      }
    }

    GetProps();
  }, [params.propiedad]);

  useEffect(() => {
    if (props.imagenes.length > 1) {
      const interval = setInterval(() => {
        setImageIndex((prevIndex) => (prevIndex + 1) % props.imagenes.length);
        setCurrentImage(props.imagenes[imageIndex].url);
      }, 10000);

      return () => clearInterval(interval);
    }
  }, [props.imagenes, imageIndex]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-2xl text-gray-500">Cargando datos de la propiedad...</p>
      </div>
    );
  }

  return (
    <div className="bg-white w-full min-h-screen flex flex-col items-center p-4">
      <div className="absolute left-0 top-0">
        <ThreeBarMenu />
      </div>

      <h1 className="text-[#005397] xl:text-6xl md:text-5xl sm:text-4xl font-bold text-center mt-6">
        {props.title}
      </h1>

      <p className="text-2xl text-gray-700 mt-4 text-center w-3/4">{props.desc}</p>

      {/* Imagen principal */}
      <div className="mt-6 w-[80%] lg:w-[60%] flex flex-col items-center">
        {currentImage && (
          <img
            src={currentImage}
            alt="Imagen de la propiedad"
            className="w-full h-[400px] object-cover rounded-xl shadow-lg border border-gray-300"
          />
        )}

        {/* Miniaturas */}
        <div className="flex justify-center mt-4 space-x-2">
          {props.imagenes.map((imagen, index) => (
            <img
              key={index}
              src={imagen.url}
              alt={imagen.descripcion}
              className={`w-20 h-20 object-cover rounded-md cursor-pointer border-2 ${
                currentImage === imagen.url ? "border-[#005397]" : "border-gray-300"
              }`}
              onClick={() => {
                setCurrentImage(imagen.url);
                setImageIndex(index);
              }}
            />
          ))}
        </div>
      </div>

      <div className="w-[80%] h-[500px] lg:h-[600px] rounded-lg border border-gray-300 shadow-md mt-6">
      {/* Mapa de ubicación */}
      <Mapa latitud={props.ubicacion.latitud} longitud={props.ubicacion.longitud} />
      </div>
    </div>
  );
}
