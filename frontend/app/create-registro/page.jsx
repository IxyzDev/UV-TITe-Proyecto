"use client";

import { React } from "react";
import { useState } from "react";

import EntryFormCopy from "../../components/EntryFormCopy";

// CODIGO PARA OBTENER TIEMPO Y FECHA ACTUAL
const date = new Date();
//const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const mesesNum = ["1","2","3","4","5","6","7","8","9","10","11","12",];
const fecha = date.getFullYear() + "-" + mesesNum[date.getMonth()] + "-" + date.getDate();
const hora = date.getHours() + ":" +date.getMinutes();

const CrearRegistro = () => {
	const [formulario, setFormulario] = useState({
		direccion: "",
		coordenadas: "",
		nombre_usuario: "", // Nombre del Radio Operador
		fecha_envio: fecha,
		hora_envio: hora,
		hora_evento: "",
		motivo_detalle: "",
		observaciones: "", // Opcional
		grupo_delictual: "", // Opcional
		num_movil: "",
		nombre_patrullero: "",
		medio_comunicacion: "",
		nombre_contribuyente: "", // Opcional
		telefono: "",
	});

	console.log(formulario);
  
	return (
	  <EntryFormCopy formulario={formulario} setFormulario={setFormulario} />
	);
  };
  
  export default CrearRegistro;