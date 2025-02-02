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

      const response = await fetch(apiUrl, {
        method: "GET",
      });

      const arr = (await response.json()).result; // Se asume que el API devuelve un arreglo llamado `result`.

      let temp: JSX.Element[] = [];
      for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        temp.push(
          <Store_Item
            key={index}
            title={element.address} // Cambiado para usar `address` de la tabla propiedades.
            id={element.id} // Cambiado a `id` de la tabla propiedades.
            desc={`$${element.price} - ${element.size} m² - ${element.bedrooms} habitaciones`} // Ejemplo con los campos de propiedades.
            imageUrl={element.imageUrl} // Nuevo campo para incluir la URL de la imagen desde `imagenes`.
          />
        );
      }
      changeList(temp);
    }
    GetServerProps();
  }, [searchTerm]); // Agregado `searchTerm` como dependencia.

  return (
    <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 overflow-y-auto p-10 m-10 row-span-4  h-[75%] gap-5 col-span-3">
      {list}
    </div>
  );
}
