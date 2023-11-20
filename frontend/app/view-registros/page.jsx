import React from "react";
import DataView from "../../components/DataView";

const mockData = [
	// Datos ficticios para visualizar en la tabla.
	{
		direccion: "Plaza Belén",
		fecha: "4/10/2023 12:00",
		nombre_operador: "Nombre Operador",
		nombre_patrullero: "Nombre Nombre Patrullero",
		telefono: "912345678",
		nombre_contribuyente: "Nombre Contribuyente",
		motivo_detalle: "Riña",
		observaciones: "Observaciones generales", // Opcional
		grupo_delictual: "", // No se necesita
		num_movil: "53",	
	},
	{
		direccion: "General Cruz 222",
		fecha: "4/10/2023 14:10",
		nombre_operador: "Juan Pérez",
		nombre_contribuyente: "Nombre Contribuyente",
		telefono: "912345678",
		nombre_patrullero: "Nombre Operador",
		motivo_detalle: "Vehiculo mal estacionado",
		observaciones: "Observaciones generales", // Opcional
		grupo_delictual: "", // No se necesita
		num_movil: "Derivado",
	},
	// ...otros registros
];

const Home = () => {

	/* const [data, setData] = useState([]);

	useEffect(() => {
	  // Realiza la solicitud a la API
	  fetch("http://localhost:3001/api/data")
		.then((response) => response.json())
		.then((data) => setData(data))
		.catch((error) => console.error("Error al obtener datos:", error));
	}, []);
  
	return <DataView data={data} />; */

	return (
		<DataView data={mockData} />
	);
};

export default Home;
