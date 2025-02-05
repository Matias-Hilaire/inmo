"use client";

import { useState } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function ThreeBarMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, status } = useSession();

  return (
    <div className="relative z-50">
      <div
        className="absolute left-0 h-screen w-6 z-40"
        onMouseEnter={() => setIsOpen(true)}
      ></div>

      <button
        onClick={() => setIsOpen(true)}
        className="p-4 rounded-br"
      >
        <div className="w-6 h-1 bg-[#005397] mb-1 rounded"></div>
        <div className="w-6 h-1 bg-[#005397] mb-1 rounded"></div>
        <div className="w-6 h-1 bg-[#005397] rounded"></div>
      </button>

      <div className="absolute top-0">
        <nav
          className={`fixed top-0 w-64 h-full bg-white shadow-lg text-black flex flex-col items-center pt-10 transition-transform duration-300 
                      ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
          onMouseLeave={() => setIsOpen(false)}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="mb-5 text-lg border-2 border-[#005397] rounded-full w-[70%]"
          >
            <span className="text-xl m-2 font-bold text-[#005397]">Cerrar</span>
          </button>

          <button className="mb-5 border-2 border-[#005397] rounded-full w-[70%]">
            <Link href="/tiendas">
              <span className="text-xl m-2 font-bold text-[#005397]">Propiedades</span>
            </Link>
          </button>

          <button className="mb-5 border-2 border-[#005397] rounded-full w-[70%]">
            <Link href="/tiendas/registrar">
              <span className="text-xl m-2 font-bold text-[#005397]">Agregar Propiedad</span>
            </Link>
          </button>

          <button className="mb-5 border-2 border-[#005397] rounded-full w-[70%]">
            <Link href="/tiendas/mitienda">
              <span className="text-xl m-2 font-bold text-[#005397]">Administrar Props</span>
            </Link>
          </button>

          <button className="mb-5 border-2 border-[#005397] rounded-full w-[70%]">
            <Link href="/map">
              <span className="text-xl m-2 font-bold text-[#005397]">Ver Mapa</span>
            </Link>
          </button>

          <button className="mb-5 border-2 border-[#005397] rounded-full w-[70%]">
            <Link href="/contactanos">
              <span className="text-xl m-2 font-bold text-[#005397]">Contáctanos</span>
            </Link>
          </button>

          {status === "unauthenticated" && (
            <button className="mb-5 border-2 border-[#005397] rounded-full w-[70%]">
              <Link href="/">
                <span className="text-xl m-2 font-bold text-[#005397]">Iniciar Sesión</span>
              </Link>
            </button>
          )}

          {status === "authenticated" && (
            <button
              onClick={() => signOut()}
              className="mb-5 border-2 border-[#005397] rounded-full w-[70%]"
            >
              <span className="text-xl m-2 font-bold text-[#005397]">Cerrar Sesión</span>
            </button>
          )}
        </nav>
      </div>
    </div>
  );
}
