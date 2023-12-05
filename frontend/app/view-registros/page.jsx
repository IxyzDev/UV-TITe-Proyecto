"use client";

import { useState, useEffect } from "react";
import DataView from "../../components/DataView";

const mockData = [
  // Datos ficticios para visualizar en la tabla.
  {
    direccion: "Plaza Belén",
    fecha: "4/10/2023 12:00",
    nombre_operador: "GALVEZ SEPULVEDA CLAUDIO MAURICIO",
    nombre_patrullero: "ROMERO NEIRA MARIO",
    telefono: "912345678",
    nombre_contribuyente: "Nombre Contribuyente",
    motivo_detalle: "AGRESIÓN",
    observaciones: "Observaciones generales", // Opcional
    grupo_delictual: "", // No se necesita
    num_movil: "SP 02",
  },
  {
    direccion: "General Cruz 222, Valparaíso, Chile.",
    fecha: "4/10/2023 14:10",
    nombre_operador: "GALVEZ SEPULVEDA CLAUDIO MAURICIO",
    nombre_contribuyente: "Nombre Contribuyente",
    telefono: "912345678",
    nombre_patrullero: "GARCIA RAMOS MAURICIO",
    motivo_detalle: "ALARMA ACTIVADA",
    observaciones: "Observaciones generales", // Opcional
    grupo_delictual: "", // No se necesita
    num_movil: "SP 01",
  },
  // ...otros registros
];

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Realiza la solicitud a la API
    fetch("http://localhost:3001/usuario/get")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error al obtener datos:", error));
  }, []);

  return <DataView data={mockData} />;

  // return (
  // 	<DataView data={mockData} />
  // );
};

export default Home;
