"use client";

import { useState } from "react";
import Link from "next/link";
import { useSession, signOut, signIn } from "next-auth/react";

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
        className="p-4 text-white rounded-br"
      >
        <div className="w-6 h-1 bg-cyan-600 shadow-xl mb-1 rounded"></div>
        <div className="w-6 h-1 bg-cyan-600 shadow-xl mb-1 rounded"></div>
        <div className="w-6 h-1 bg-cyan-600 shadow-xl rounded"></div>
      </button>

      <div className="absolute top-0 bg-cyan-600 shadow-xl">
        <nav
          className={`menu-bar fixed top-0 w-64 h-full bg-slate-200 shadow-xl text-white
                      flex flex-col items-center pt-10 transition-transform duration-300 
                      ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
          onMouseLeave={() => setIsOpen(false)}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="mb-5 text-lg border-2 border-cyan-500 rounded-full w-[70%]"
          >
            <span className="text-xl m-2 font-extrabold bg-cyan-500 bg-clip-text text-transparent leading-normal">
              Cerrar
            </span>
          </button>

          {/* 🔹 Página de Propiedades */}
          <button className="mb-5 border-2 border-cyan-500 rounded-full w-[70%]">
            <Link href="\tiendas">
              <span className="text-xl m-2 font-extrabold bg-cyan-500 bg-clip-text text-transparent leading-normal">
                Propiedades
              </span>
            </Link>
          </button>

          {/* 🔹 Siempre disponible: Agregar Propiedad */}
          <button className="mb-5 border-2 border-cyan-500 rounded-full w-[70%]">
            <Link href="\tiendas\registrar">
              <span className="text-xl m-2 font-extrabold bg-cyan-500 bg-clip-text text-transparent leading-normal">
                Agregar Propiedad
              </span>
            </Link>
          </button>

          {/* 🔹 Siempre disponible: Ver Propiedades */}
          <button className="mb-5 border-2 border-cyan-500 rounded-full w-[70%]">
            <Link href="\tiendas\mitienda">
              <span className="text-xl m-2 font-extrabold bg-cyan-500 bg-clip-text text-transparent leading-normal">
                Ver Propiedades
              </span>
            </Link>
          </button>

          {/* 🔹 Nuevo botón: Ver Mapa */}
          <button className="mb-5 border-2 border-cyan-500 rounded-full w-[70%]">
            <Link href="/map">
              <span className="text-xl m-2 font-extrabold bg-cyan-500 bg-clip-text text-transparent leading-normal">
                Ver Mapa
              </span>
            </Link>
          </button>

          {/* 🔹 Contacto */}
          <button className="mb-5 border-2 border-cyan-500 rounded-full w-[70%]">
            <Link href="/contactanos">
              <span className="text-xl m-2 font-extrabold bg-cyan-500 bg-clip-text text-transparent leading-normal">
                Contactanos
              </span>
            </Link>
          </button>

          {status === "unauthenticated" && (
            <button className="mb-5 border-2 border-cyan-500 rounded-full w-[70%]">
              <Link href="/">
                <span className="text-xl m-2 font-extrabold bg-cyan-500 bg-clip-text text-transparent leading-normal">
                  signIn/login
                </span>
              </Link>
            </button>
          )}

          {status === "authenticated" && (
            <button
              onClick={() => signOut()}
              className="mb-5 border-2 border-cyan-500 rounded-full w-[70%]"
            >
              <span className="text-xl m-2 font-extrabold bg-cyan-500 bg-clip-text text-transparent leading-normal">
                Cerrar Sesión
              </span>
            </button>
          )}
        </nav>
      </div>
    </div>
  );
}
