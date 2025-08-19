'use client'

import { useState } from "react";

const TasacionCalculator = () => {
  const [formValues, setFormValues] = useState({
    tipoMaterialParedes: "",
    materialMarcosVentanas: "",
    materialPiso: "",
    tipoVidrio: "",
    costaLago: false,
    terrenoConPasto: false,
    estacionamiento: "0",
    pileta: false,
    parrilla: false,
    superficieTerreno: "",
    superficieConstruida: "",
    cantidadHabitaciones: "",
    cantidadBanos: "",
    tipoTecho: "",
    tipoCalefaccion: "",
    aireAcondicionado: false,
    antiguedad: "",
    calidadConstruccion: "",
    seguridadPrivada: false,
    ascensor: false,
    barrioPrivado: false,
    transporteCercano: false,
    supermercadosCercanos: false,
    colegiosCercanos: false,
    hospitalesCercanos: false,
    centroComercialCercano: false,
    accesibilidadDiscapacitados: false,
    balcon: false,
    terraza: false,
    quincho: false,
    deposito: false,
    dependenciaServicio: false,
    amoblado: false,
    gasNatural: false,
    aguaCorriente: false,
    cloacas: false,
    luz: false,
    internet: false,
    cable: false,
    telefono: false,
    expensas: "",
    rentaEstimativa: ""
  });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const calcularTasacion = () => {
    let basePrice = 50000;
    if (formValues.costaLago) basePrice += 30000;
    if (formValues.terrenoConPasto) basePrice += 5000;
    if (formValues.pileta) basePrice += 20000;
    if (formValues.parrilla) basePrice += 5000;
    basePrice += parseInt(formValues.superficieConstruida || "0") * 1500;
    basePrice += parseInt(formValues.superficieTerreno || "0") * 500;
    return basePrice;
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Calculadora de Tasación</h2>
      <div className="grid grid-cols-2 gap-4">
        {Object.keys(formValues).map((key) => {
          const typedKey = key as keyof typeof formValues;
          return typeof formValues[typedKey] === "boolean" ? (
            <label key={typedKey} className="flex items-center gap-2">
              <input type="checkbox" name={typedKey} checked={formValues[typedKey] as boolean} onChange={handleChange} />
              {typedKey.replace(/([A-Z])/g, ' $1').trim()}
            </label>
          ) : (
            <input key={typedKey} type="text" name={typedKey} value={formValues[typedKey] as string} onChange={handleChange} placeholder={typedKey.replace(/([A-Z])/g, ' $1').trim()} />
          );
        })}
      </div>
      <button className="mt-4" onClick={calcularTasacion}>Calcular Tasación</button>
      <h3 className="text-xl font-semibold mt-4">Valor estimado: ${calcularTasacion().toLocaleString()}</h3>
    </div>
  );
};

export default TasacionCalculator;
