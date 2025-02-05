"use client";

import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ThreeBarMenu from "../ThreeBarMenu";

export default function LandingUI() {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div className="h-screen flex items-center justify-center">Cargando...</div>;
  }

  if (status === "authenticated") {
    router.push("/tiendas/");
  }

  return (
    <div className="bg-white h-screen w-full flex flex-col justify-center items-center px-4">
      <h1 className="text-6xl font-extrabold text-[#005397] leading-normal">Inmo</h1>
      <div className="w-full flex flex-col items-center">
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
