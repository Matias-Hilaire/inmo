"use client";

import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ThreeBarMenu from "../ThreeBarMenu";
import Image from "next/image";

export default function LandingUI() {
  const router = useRouter();
  const { status } = useSession();

  if (status === "loading") {
    return <div className="h-screen flex items-center justify-center">Cargando...</div>;
  }

  if (status === "authenticated") {
    router.push("/tiendas/");
  }

  return (
    <div className="bg-white h-screen w-full flex flex-col justify-center items-center px-4 relative">
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
            className=""
          />
        </button>
      </div>

      <div className="w-full flex flex-col items-center mt-32">

        <Link
          href="/tiendas/"
          className="bg-[#005397] text-white py-2 px-6 rounded-lg transition-all duration-300 w-full max-w-[300px] text-center mb-4 hover:bg-blue-800">
          VER PROPIEDADES
        </Link>

        <button
          className="bg-[#005397] text-white py-2 px-6 rounded-lg transition-all duration-300 w-full max-w-[300px] text-center mb-4 hover:bg-blue-800"
          onClick={() => {
            signIn();
          }}
        >
          INICIAR SESIÓN
        </button>
        <Link
          href="/signup/"
          className="bg-[#005397] text-white py-2 px-6 rounded-lg transition-all duration-300 w-full max-w-[300px] text-center hover:bg-blue-800"
        >
          REGISTRARSE
        </Link>
      </div>
    </div>
  );
}
