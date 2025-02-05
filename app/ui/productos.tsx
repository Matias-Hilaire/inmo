"use client";

export default function Store_Item(props: any) {
  return (
    <button className="transition-all bg-[#005397] text-white hover:bg-blue-800 hover:-translate-y-2 hover:shadow-lg shadow-md rounded-lg p-6 flex flex-col justify-center items-center min-h-[350px]">
      <h1 className="text-center text-2xl font-bold mb-2">{props.title}</h1>
      <p className="text-center text-lg">{props.desc}</p>
    </button>
  );
}
