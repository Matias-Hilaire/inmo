"use client";

import { Loader } from "@googlemaps/js-api-loader";
import React, { useEffect, useRef, useState } from "react";
import ThreeBarMenu from "../ThreeBarMenu";

interface Property {
  id: number;
  address: string;
  latitude: number;
  longitude: number;
}

export default function Mapa() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [properties, setProperties] = useState<Property[]>([]);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    fetch("/api/listado")
      .then((response) => response.json())
      .then((data) => {
        const validProperties = data.result.filter(
          (prop: any) =>
            prop.latitude !== null &&
            prop.longitude !== null &&
            !isNaN(prop.latitude) &&
            !isNaN(prop.longitude)
        );
        setProperties(validProperties);
      })
      .catch((error) => console.error("Error al obtener propiedades:", error));
  }, []);

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

        const defaultPosition =
          properties.length > 0
            ? { lat: properties[0].latitude, lng: properties[0].longitude }
            : { lat: -41.1337, lng: -71.3102 };

        const map = new google.maps.Map(mapRef.current, {
          center: defaultPosition,
          zoom: properties.length > 0 ? 14 : 12,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
        });

        setMapLoaded(true);

        properties.forEach((property) => {
          new google.maps.Marker({
            position: { lat: property.latitude, lng: property.longitude },
            map,
            title: property.address,
          });
        });
      })
      .catch((error) => console.error("Error al inicializar Google Maps:", error));
  }, [properties]);

  return (
    <div className="w-full h-screen bg-white flex flex-col justify-center items-center">
      <div className="absolute left-0 top-0">
        <ThreeBarMenu />
      </div>

      {!mapLoaded && (
        <div className="text-[#005397] text-2xl font-semibold p-4">
          Cargando mapa...
        </div>
      )}

      <div ref={mapRef} className="w-[95%] h-[90%] rounded-xl bg-gray-200 shadow-md border border-gray-300"></div>
    </div>
  );
}
