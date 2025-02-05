"use client";

import { Loader } from "@googlemaps/js-api-loader";
import React, { useEffect, useRef, useState } from "react";

interface MapaProps {
  latitud: number;
  longitud: number;
}

export default function Mapa({ latitud, longitud }: MapaProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    if (!mapRef.current) return;

    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
      version: "weekly",
    });

    loader
      .load()
      .then((google) => {
        if (!mapRef.current) return;

        const map = new google.maps.Map(mapRef.current, {
          center: { lat: latitud, lng: longitud },
          zoom: 14,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
        });

        new google.maps.Marker({
          position: { lat: latitud, lng: longitud },
          map,
          title: "Ubicación de la propiedad",
        });

        setMapLoaded(true);
      })
      .catch((error) => console.error("Error al cargar Google Maps:", error));
  }, [latitud, longitud]);

  return (
    <div className="w-full h-72 rounded-lg border border-gray-300 shadow-md mt-6">
      {!mapLoaded && (
        <p className="text-center text-[#005397] font-semibold p-4">Cargando mapa...</p>
      )}
      <div ref={mapRef} className="w-full h-full"></div>
    </div>
  );
}
