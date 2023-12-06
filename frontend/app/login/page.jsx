"use client";
import React from "react";
import LoginPage from "../../components/Form";
import { useState, useEffect } from "react";

const crearRegistro = () => {

	const [respuesta, setRespuesta] = useState([]);
	console.log("resp", respuesta);

	return (
		<LoginPage setRespuesta={setRespuesta}/>
	);
};

export default crearRegistro;
