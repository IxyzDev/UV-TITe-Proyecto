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
	const [p, setP] = useState([]);


	const [prueba, setPrueba] = useState([]);
	useEffect(() => {
		// Realiza la solicitud a la API
		fetch("http://localhost:80/reporte/getcompleto")
		.then((response) => response.json())
		.then((complete) => setPrueba(complete))
		.catch((error) => console.error("Error al obtener datos:", error));
	}, []);
	console.log("PRUEBA", prueba);


	useEffect(() => {
		// Realiza la solicitud a la API
		fetch("http://localhost:80/reporte/get")
		.then((response) => response.json())
		.then((data) => setData(data))
		.catch((error) => console.error("Error al obtener datos:", error));
	}, []);

	const ubicacionIDs = data.map(entry => entry.ubicacion_ID);
	const ubicacionID = ubicacionIDs[0];

	useEffect(() => {
		// Realiza la solicitud a la API
		fetch(`http://localhost:80/ubicacion/get/${ubicacionID}`)
		.then((response) => response.json())
		.then((ubicacion) => setP(ubicacion))
		.catch((error) => console.error("Error al obtener datos:", error));
	}, [ubicacionID]);

	return <DataView data={data} ubi={p.direccion}/>;
};

export default Home;