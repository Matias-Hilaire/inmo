"use client"; 
import React from "react";
import Link from "next/link";
import Image from "next/image";
import ThreeBarMenu from "../ThreeBarMenu";

export default function Contact() {
  return (
    <div className="overflow-hidden h-screen bg-white flex flex-col items-center justify-start relative">
      <div className="absolute left-0 top-0">
        <ThreeBarMenu />
      </div>

      <div className="bg-white p-4 rounded-lg shadow-xl mb-8 w-full max-w-md mt-24 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-[#005397]">Información de Contacto</h2>
        <p className="mb-2 text-gray-700">
          <strong>Email:</strong> contacto@ejemplo.com
        </p>
        <p className="mb-2 text-gray-700">
          <strong>Teléfono:</strong> +54 9 1234 5678
        </p>
        <div className="mt-2">
          <h3 className="text-xl font-semibold mb-2 text-[#005397]">Redes Sociales</h3>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com" className="text-[#005397] hover:text-blue-900">
              Facebook
            </a>
            <a href="https://www.instagram.com" className="text-[#005397] hover:text-blue-900">
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-[#005397]">Envíanos un mensaje</h2>
        <form className="flex flex-col space-y-4">
          <textarea
            className="border border-[#005397] p-2 rounded-md resize-none h-32 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#005397]"
            placeholder="Escribe tu mensaje aquí..."
            required
          ></textarea>

          <input
            type="email"
            className="border border-[#005397] p-2 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#005397]"
            placeholder="Tu correo electrónico"
            required
          />

          <button
            type="submit"
            className="bg-[#005397] text-white py-2 px-4 rounded-md hover:bg-blue-900 transition-colors"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
