"use client";

import "@/app/globals.css";
import { useEffect, useState } from "react";
import ThreeBarMenu from "@/app/ThreeBarMenu";
import Mapa from "@/app/mapa";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface Imagen {
  url: string;
  descripcion: string;
}

export default function Propiedad({ params }: { params: { propiedad: string | string[] } }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [currentImage, setCurrentImage] = useState<string>("");
  const [imageIndex, setImageIndex] = useState(0);
  const [visibleImagesStart, setVisibleImagesStart] = useState(0); // Inicio de imágenes visibles
  const visibleImageCount = 7; // Cantidad de imágenes visibles por página
  const [props, changeProps] = useState({
    title: "Cargando...",
    desc: "Cargando...",
    ubicacion: { latitud: 0, longitud: 0 },
    imagenes: [] as Imagen[],
    price: 0,
    size: 0,
    bedrooms: 0,
    type: "",
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
          price: data.result.precio || 0,
          size: data.result.tamano || 0,
          bedrooms: data.result.habitaciones || 0,
          type: data.result.tipo || "No especificado",
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

  const handleNextImages = () => {
    if (visibleImagesStart + visibleImageCount < props.imagenes.length) {
      setVisibleImagesStart(visibleImagesStart + visibleImageCount);
    }
  };

  const handlePrevImages = () => {
    if (visibleImagesStart > 0) {
      setVisibleImagesStart(visibleImagesStart - visibleImageCount);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-2xl text-gray-500">Cargando datos de la propiedad...</p>
      </div>
    );
  }

  return (
    <div className="bg-white w-full min-h-screen flex flex-col items-center p-4 relative">
      <div className="absolute left-0 top-0">
        <ThreeBarMenu />
      </div>

      <div className="absolute top-6 flex justify-center w-full">
        <button onClick={() => router.push("/tiendas")} className="transition-all">
          <Image
            src="/Ser de la Patagonia logo2.jpeg"
            alt="Ser de la Patagonia Logo"
            width={300}
            height={100}
            priority
          />
        </button>
      </div>

      <div className="mt-60 w-full text-center">
        <h1 className="text-[#005397] xl:text-6xl md:text-5xl sm:text-4xl font-bold">{props.title}</h1>
        <p className="text-xl text-gray-600 mt-2">{props.ubicacion.latitud}, {props.ubicacion.longitud}</p>
      </div>

      <div className="mt-6 w-[90%] lg:w-[70%] flex flex-col items-center">
        {currentImage && (
          <div className="w-full max-w-[800px] h-[500px] flex items-center justify-center overflow-hidden">
            <Image
              src={currentImage}
              alt="Imagen de la propiedad"
              width={800}
              height={500}
              className="w-auto h-auto max-h-[100%] max-w-[100%] object-contain"
            />
          </div>
        )}

        <div className="flex justify-center items-center mt-4">
          {visibleImagesStart > 0 && (
            <button onClick={handlePrevImages} className="text-[#005397] p-2">
              ⬅️
            </button>
          )}
          <div className="flex justify-center space-x-3 overflow-hidden w-full max-w-[800px]">
            {props.imagenes.slice(visibleImagesStart, visibleImagesStart + visibleImageCount).map((imagen, index) => (
              <Image
                key={index}
                src={imagen.url}
                alt={imagen.descripcion}
                width={100}
                height={100}
                className={`w-24 h-24 object-contain rounded-md cursor-pointer border-2 ${
                  currentImage === imagen.url ? "border-[#005397]" : "border-gray-300"
                }`}
                onClick={() => {
                  setCurrentImage(imagen.url);
                  setImageIndex(index + visibleImagesStart);
                }}
              />
            ))}
          </div>
          {visibleImagesStart + visibleImageCount < props.imagenes.length && (
            <button onClick={handleNextImages} className="text-[#005397] p-2">
              ➡️
            </button>
          )}
        </div>
      </div>

      <div className="w-[80%] lg:w-[60%] mt-6 bg-gray-100 p-6 rounded-xl shadow-lg border border-gray-300">
        <h2 className="text-2xl text-[#005397] font-semibold mb-4">Información de la Propiedad</h2>
        <div className="grid grid-cols-2 gap-4">
          <p className="text-lg text-gray-700"><strong>Precio:</strong> ${props.price}</p>
          <p className="text-lg text-gray-700"><strong>Tamaño:</strong> {props.size} m²</p>
          <p className="text-lg text-gray-700"><strong>Habitaciones:</strong> {props.bedrooms}</p>
          <p className="text-lg text-gray-700"><strong>Tipo:</strong> {props.type}</p>
        </div>
        <p className="text-lg text-gray-700 mt-4"><strong>Descripción:</strong> {props.desc}</p>
      </div>

      <div className="w-[80%] h-[500px] lg:h-[600px] rounded-lg border border-gray-300 shadow-md mt-6">
        <Mapa latitud={props.ubicacion.latitud} longitud={props.ubicacion.longitud} />
      </div>
    </div>
  );
}
