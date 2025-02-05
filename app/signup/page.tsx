"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function MenuRegister() {
  const [visible, changeVisible] = useState("hidden");

  async function Submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formdata = new FormData(e.currentTarget);

    const data = await fetch("/api/signup/", {
      method: "POST",
      body: formdata,
    });

    const resp = await data.json();
    if (resp.status === 200) {
      await signIn("credentials", {
        username: formdata.get("username"),
        password: formdata.get("password"),
        redirect: true,
        callbackUrl: "/tiendas",
      });
    } else {
      changeVisible("visible");
    }
  }

  return (
    <div className="bg-white h-screen w-full flex flex-col justify-center items-center">
      <div className="bg-[#f8f9fa] w-[300px] h-[350px] flex flex-col justify-center rounded-lg shadow-xl">
        <form onSubmit={Submit} className="flex flex-col items-center">
          <label
            className="text-3xl font-bold text-[#005397] mb-2"
            htmlFor="username"
          >
            Usuario
          </label>
          <input
            className="w-[80%] text-lg p-2 bg-white text-gray-800 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#005397]"
            name="username"
            id="username"
            type="text"
          />

          <label
            className="text-3xl font-bold text-[#005397] mt-4 mb-2"
            htmlFor="password"
          >
            Contraseña
          </label>
          <input
            className="w-[80%] text-lg p-2 bg-white text-gray-800 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#005397]"
            name="password"
            id="password"
            type="password"
          />

          <h1 className={`text-red-500 text-lg mt-4 ${visible}`}>
            Usuario o contraseña no válidos
          </h1>
          <button
            className="bg-[#005397] text-white text-lg rounded-md px-4 py-2 mt-6 w-[50%] shadow-lg hover:bg-blue-800"
            type="submit"
          >
            ENVIAR
          </button>
        </form>
      </div>
    </div>
  );
}
