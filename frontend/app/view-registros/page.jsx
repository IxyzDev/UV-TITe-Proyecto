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
  const [ubicaciones, setUbi] = useState([]);

  useEffect(() => {
    // Realiza la solicitud a la API
    fetch("http://localhost:80/reporte/get")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error al obtener datos:", error));
  }, []);

  useEffect(() => {
    // Realiza la solicitud a la API
    fetch("http://localhost:80/ubicacion/get")
      .then((response) => response.json())
      .then((ubicacion) => setUbi(ubicacion))
      .catch((error) => console.error("Error al obtener datos:", error));
  }, []);

  const ubicacionIDs = data.map(entry => entry.ubicacion_ID);
  const ubifiltrada = ubicaciones.filter(entry => entry.ubicacion_ID === ubicacionIDs[0]);


  const ubic = ubifiltrada.map(entry => entry.direccion);
  //const filteredData = data.filter(entry => entry.ubicacion_ID);
  console.log("algo", ubic[0]);

  console.log("datos obtenidos del back: ", data);
  console.log("UBI: ", ubicaciones);

  return <DataView data={data} ubi={ubic[0]}/>;

  // return (
  // 	<DataView data={mockData} />
  // );
};

export default Home;