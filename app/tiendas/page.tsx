"use client";

import Stores from "../ui/stores_ui";
import ThreeBarMenu from "../ThreeBarMenu";
import { useState } from "react";

export default function Menu_Tiendas() {
  const [searchTerm, setSearchTerm] = useState("");

  function search() {
    if (searchTerm.trim() !== "") {
      window.location.href = `/tiendas?search=${encodeURIComponent(searchTerm)}`;
    }
  }

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-white">
      <div className="h-screen w-screen flex flex-col justify-center items-center overflow-hidden">
        <div className="absolute top-5 right-10 flex items-center space-x-3">
          <input
            type="text"
            className="w-64 h-12 p-3 text-lg border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#005397] text-black"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar..."
          />
          <button
            className="bg-[#005397] text-white p-3 rounded-lg hover:bg-blue-800 transition-colors duration-300 shadow-md"
            onClick={search}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>

        <div className="absolute left-0 top-0">
          <ThreeBarMenu />
        </div>

        <h1 className="text-5xl font-bold text-[#005397] mt-24">Propiedades</h1>

        <div className="text-black w-full mt-6">
          <Stores />
        </div>
      </div>
    </div>
  );
}
