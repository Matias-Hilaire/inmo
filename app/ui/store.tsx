"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Store_Item(props: any) {
  const router = useRouter();

  function Pressed() {
    router.push("/propiedad/" + props.id);
  }

  return (
    <button
      onClick={Pressed}
      className="transition-all bg-[#005397] hover:bg-blue-800 hover:-translate-y-2 hover:shadow-lg shadow-md rounded-lg p-6 flex flex-col items-center min-h-[400px] max-h-[400px] text-white"
    >
      <h1 className="text-center text-2xl font-bold w-full mb-2">{props.title}</h1>
      <p className="text-center text-lg w-full">{props.desc}</p>
      <div className="mt-4 flex justify-center w-full h-[200px]">
        <Image
          className="rounded-md shadow-md"
          src={props.imageUrl ? props.imageUrl : "/landing.jpg"}  
          alt={props.title}
          width={300}
          height={200}
          style={{ objectFit: "cover" }}
        />
      </div>
    </button>
  );
}
