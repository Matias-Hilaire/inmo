"use client";

import Stores from "../ui/stores_ui";
import ThreeBarMenu from "../ThreeBarMenu";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Menu_Tiendas() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  function search() {
    if (searchTerm.trim() !== "") {
      router.push(`/tiendas?search=${encodeURIComponent(searchTerm)}`);
    }
  }

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-start bg-white">
      <div className="absolute left-0 top-0">
        <ThreeBarMenu />
      </div>

      <div className="w-full flex justify-center mt-6">
        <button onClick={() => router.push("/tiendas")}>
          <Image
            src="/Ser de la Patagonia logo2.jpeg"
            alt="Ser de la Patagonia Logo"
            width={300}
            height={100}
            priority
          />
        </button>
      </div>

      <div className="w-full flex justify-center mt-6">
        <div className="flex items-center space-x-3 bg-gray-100 p-4 rounded-lg shadow-md border border-gray-300">
          <input
            type="text"
            className="w-80 h-14 p-3 text-lg border border-gray-400 rounded-lg shadow-sm text-black"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar propiedades..."
          />
          <button
            className="bg-[#005397] text-white px-5 py-3 rounded-lg hover:bg-blue-800 transition-colors duration-300 shadow-md text-lg"
            onClick={search}
          >
            Buscar
          </button>
        </div>
      </div>
      
      <div className="w-full mt-6 flex-grow">
        <Stores />
      </div>
    </div>
  );
}
