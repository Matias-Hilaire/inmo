"use client";
import React, { useState, useEffect } from "react";
import { signOut, signIn, useSession } from "next-auth/react";

export default function ThreeBarMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, status } = useSession();
  const [tienePropiedad, setTienePropiedad] = useState(false);

  console.log(session);

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Verificar si el usuario ya tiene una propiedad (negocio)
  useEffect(() => {
    if (session?.user) {
      fetch("/api/mitienda", {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.final_result) {
            setTienePropiedad(true);
          }
        })
        .catch((error) => console.error("Error al verificar propiedad:", error));
    }
  }, [session]);

  return (
    <div className="relative z-50">
      <div className="absolute left-0 h-screen w-6 z-40" onMouseEnter={openMenu}></div>

      <button onClick={openMenu} className="p-4 text-white rounded-br">
        <div className="w-6 h-1 bg-cyan-600 shadow-xl mb-1 rounded"></div>
        <div className="w-6 h-1 bg-cyan-600 shadow-xl mb-1 rounded"></div>
        <div className="w-6 h-1 bg-cyan-600 shadow-xl rounded"></div>
      </button>

      <div className="absolute top-0 bg-cyan-600 shadow-xl">
        <nav
          className={`menu-bar fixed top-0 w-64 h-full bg-slate-200 shadow-xl text-white
                      flex flex-col items-center pt-10 transition-transform duration-300 
                      ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
          onMouseLeave={closeMenu}
        >
          <button
            onClick={closeMenu}
            className="mb-5 text-lg border-2 border-cyan-500 rounded-full w-[70%]"
          >
            <a className="text-xl m-2 font-extrabold bg-cyan-500 bg-clip-text text-transparent leading-normal">
              Cerrar
            </a>
          </button>

          <button className="mb-5 border-2 border-cyan-500 rounded-full w-[70%]">
            <a href="../tiendas" className="text-xl m-2 font-extrabold bg-cyan-500 bg-clip-text text-transparent leading-normal">
              Tiendas
            </a>
          </button>

          {/* Mostrar "Ver Propiedad" si el usuario tiene una propiedad registrada */}
          {tienePropiedad ? (
            <button className="mb-5 border-2 border-cyan-500 rounded-full w-[70%]">
              <a href="../tiendas/mitienda" className="text-xl m-2 font-extrabold bg-cyan-500 bg-clip-text text-transparent leading-normal">
                Ver Propiedad
              </a>
            </button>
          ) : (
            <button className="mb-5 border-2 border-cyan-500 rounded-full w-[70%]">
              <a href="../tiendas/registrar" className="text-xl m-2 font-extrabold bg-cyan-500 bg-clip-text text-transparent leading-normal">
                Añadir Propiedad
              </a>
            </button>
          )}

          <button className="mb-5 border-2 border-cyan-500 rounded-full w-[70%]">
            <a href="../contactanos" className="text-xl m-2 font-extrabold bg-cyan-500 bg-clip-text text-transparent leading-normal">
              Contáctanos
            </a>
          </button>

          {status === "authenticated" ? (
            <button onClick={() => signOut()} className="mb-5 border-2 border-cyan-500 rounded-full w-[70%]">
              <a className="text-xl m-2 font-extrabold bg-cyan-500 bg-clip-text text-transparent leading-normal">
                Cerrar Sesión
              </a>
            </button>
          ) : (
            <button onClick={() => signIn()} className="mb-5 border-2 border-cyan-500 rounded-full w-[70%]">
              <a className="text-xl m-2 font-extrabold bg-cyan-500 bg-clip-text text-transparent leading-normal">
                Iniciar Sesión
              </a>
            </button>
          )}
        </nav>
      </div>
    </div>
  );
}
