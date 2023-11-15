import React from "react";
import DataView from "../../components/DataView";

const mockData = [
	// Datos ficticios para visualizar en la tabla.
	{
		lugar: "Plaza Belén",
		fecha: "4/10/2023 12:00",
		operador: "Juan Pérez",
		direccion: "Calle Principal 123",
	},
	{
		lugar: "Universidad",
		fecha: "4/10/2023 14:10",
		operador: "Juan Pérez",
		direccion: "General Cruzz",
	},
	// ...otros registros
];

const Home = () => {
	return (
		<DataView data={mockData} />
	);
};

export default Home;
