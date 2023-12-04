"use client";

import { useState } from "react";
import Crud from "../../components/Crud";
import SelectCrud from "../../components/SelectCrud";

const crud = () => {
	const [seleccion, setSeleccion] = useState(null);
	
	return (
		<>
			<div className="bg-white shadow-lg w-5/6 mx-auto mt-10 overflow-auto">
				<SelectCrud seleccion={seleccion} setSeleccion={setSeleccion}/>
				{seleccion === null || seleccion === undefined ? console.log("null") : <Crud select={seleccion}/>}
				{/* <Crud /> */}
			</div>
		</>
	);
};

export default crud;
