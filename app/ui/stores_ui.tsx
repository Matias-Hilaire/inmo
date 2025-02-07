"use client";

import { useEffect, useState } from "react";
import Store_Item from "./store";
import { useSearchParams } from "next/navigation";

export default function Stores() {
  const [list, changeList] = useState<React.JSX.Element[]>([]);
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("search") || "";

  useEffect(() => {
    async function GetServerProps() {
      const apiUrl = searchTerm
        ? `/api/creacion/propiedad?search=${encodeURIComponent(searchTerm)}`
        : `/api/creacion/propiedad`;

      try {
        const response = await fetch(apiUrl, { method: "GET" });

        if (!response.ok) {
          console.error("Error al obtener propiedades");
          return;
        }

        const arr = (await response.json()).result;

        const temp: JSX.Element[] = arr.map((element: any, index: number) => (
          <Store_Item
            key={index}
            title={element.address}
            id={element.id}
            desc={`$${element.price} - ${element.size} m² - ${element.bedrooms} habitaciones`}
            imageUrl={(element.imageUrls || "").split(",")[0] || "/placeholder.jpg"}
          />
        ));
        changeList(temp);
      } catch (error) {
        console.error("Error inesperado:", error);
      }
    }
    GetServerProps();
  }, [searchTerm]);

  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 p-6 h-[75%]">
      {list.length > 0 ? (
        list
      ) : (
        <p className="text-center text-xl text-gray-500 col-span-full">
          No se encontraron propiedades.
        </p>
      )}
    </div>
  );
}
