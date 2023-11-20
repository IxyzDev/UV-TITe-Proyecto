"use client";

import { useState, useEffect } from "react";
import Swal from "sweetalert2"; // Alertas 
import withReactContent from "sweetalert2-react-content";
import AutocompleteMUI from "@mui/material/Autocomplete"; 
import { TextField, Radio, RadioGroup, FormControlLabel} from "@mui/material";
// API Google
import PlacesAutocomplete from "../components/Places";

import { useRouter } from "next/navigation";


import data from "../utils/data.json"; // Datos para desplegables.
const motivo = data.motivo;
const movil = data.movil;
const patrullero = data.patrullero;
const medio_comunicacion = data.medio_comunicacion;
const grupo_delictual = data.grupo_delictual;

const Alert = withReactContent(Swal);
const AlertClick = () => {
  Alert.fire({
	title: '<p className="text-green-700 font-semibold text-2xl mb-4">Registro Guardado Exitosamente</p>',
	icon: "success",
  });
};

const EntryForm = ({ formulario, setFormulario }) => {
    const router = useRouter();

	const handleSubmit = (e) => {
		e.preventDefault();
		// Aquí se enviarían los datos a la base de datos
		console.log("handleSubmit");
	};

	// RADIOGROUP
	const [contribuyente, setContribuyente] = useState("tercero");
	const [showAdditionalFields, setShowAdditionalFields] = useState(false);
	const handleChangeContribuyente = (e) => {
		const { value } = e.target;

		if (value === "tercero") {
			setShowAdditionalFields(true);
		} else {
			setShowAdditionalFields(false);
		}

		setContribuyente(value);
	};
	useEffect(() => {
		// Verificar el valor inicial y mostrar u ocultar campos adicionales
		if (contribuyente === "tercero") {
			setShowAdditionalFields(true);
		} else {
			setShowAdditionalFields(false);
		}
	}, [contribuyente]);

	return (
		<div>
			<form noValidate autoComplete="off" onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-lg max-w-5x1 mx-auto mt-20 grid grid-cols-3 gap-4">
				<div className="col-span-3 flex justify-between items-center mt-6">
					<div className="col-span-1">
						<button onClick={() => router.push("/")} className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline" type="button">
							Atrás
						</button>
					</div>
					<div className="col-span-1">
						<h2 className="text-2xl text-gray-700">
							Ingreso de información del evento
						</h2>
					</div>
						<div className="col-span-1">
						<RadioGroup aria-labelledby="contribuyente" name="contribuyente" id="contribuyente" value={contribuyente} onChange={handleChangeContribuyente}>
							<FormControlLabel value="tercero" control={<Radio />} label="Tercero" />
							<FormControlLabel value="patrullero" control={<Radio />} label="Patrullero" />
						</RadioGroup>
					</div>
				</div>

				{showAdditionalFields && contribuyente === "tercero" && (<>
					{/* TELEFONO */}
					<div className="col-span-1"> 
						<label htmlFor="telefono" className="block text-sm pl-1 pb-3 font-medium text-gray-700" > 
							{" "} Telefono:{" "} 
						</label>
						<TextField id="telefono" label="9 12345678" variant="outlined" fullWidth required
						onChange={(e) => setFormulario(formulario => ({ ...formulario, "telefono": e.target.value }))}/>
					</div>

					{/* NOMBRE - NO REQUERIDO */}
					<div className="col-span-1"> 
						<label htmlFor="nombre_contribuyente" className="block text-sm pl-1 pb-3 font-medium text-gray-700" > 
							{" "} Nombre contribuyente:{" "} 
						</label>
						<TextField id="nombre_contribuyente" label="Nombre" variant="outlined" fullWidth 
						onChange={(e) => setFormulario(formulario => ({ ...formulario, "nombre_contribuyente": e.target.value }))} />
					</div>
					{/* MEDIO */}
					<div className="col-span-1">
						<label htmlFor="medio_comunicacion" className="block text-sm pl-1 pb-3 font-medium text-gray-700" > 
							{" "} Medio de comunicacion:{" "} 
						</label> 
						<AutocompleteMUI disablePortal fullWidth id="medio_comunicacion" options={medio_comunicacion}
							onChange={(e) => setFormulario(formulario => ({ ...formulario, "medio_comunicacion": e.target.innerText }))}
							renderInput={(params) => (
								<TextField required {...params}
									label="Medio"
								/>
							)}
						/>
					</div>
					</>
				)}

				{/* DIRECCION DEL INCIDENTE */}			
				<PlacesAutocomplete post={post} setPost={setPost} formulario={formulario} setFormulario={setFormulario} />

				{/* MOTIVO-DETALLE DE LA LLAMADA */}
				<div className="col-span-2"> 
					<label htmlFor="motivo_detalle" className="block text-sm pl-1 pb-3 font-medium text-gray-700" >
						{" "} Motivo:{" "}
					</label>
					<AutocompleteMUI disablePortal fullWidth id="motivo_detalle" options={motivo}
						onChange={(e) => setFormulario(formulario => ({ ...formulario, "motivo_detalle": e.target.innerText }))}
						renderInput={(params) => (
							<TextField required {...params}
								label="Motivo de la llamada" />
						)}
					/>
				</div>

				{/* GRUPO DELICTUAL - NO REQUERIDO */}
				<div className="col-span-1">
					<label htmlFor="grupo_delictual" className="block text-sm pl-1 pb-3 font-medium text-gray-700" >
						{" "} Grupo Delictual:{" "}
					</label>
					<AutocompleteMUI disablePortal fullWidth id="grupo_delictual" options={grupo_delictual}
						onChange={(e) => setFormulario(formulario => ({ ...formulario, "grupo_delictual": e.target.innerText }))} 
						renderInput={(params) => (
							<TextField {...params} 
								label="Grupo delictual" />
						)}
					/>
				</div>

				{/* VEHICULO ENVIADO - DELITO DERIVADO */}
				<div className="col-span-1">
					<label htmlFor="num_movil" className="block text-sm pl-1 pb-3 font-medium text-gray-700" >
						{" "} Movil enviado:{" "}
					</label>
					<AutocompleteMUI disablePortal fullWidth id="num_movil" options={movil}
						onChange={(e) => setFormulario(formulario => ({ ...formulario, "num_movil": e.target.innerText }))}
						renderInput={(params) => (
							<TextField required {...params} 
								label="Num de movil" />
						)}
					/>
				</div>

				{/* NOMBRE PATRULLETO ENVIADO */}
				<div className="col-span-1">
					<label htmlFor="patrullero" className="block text-sm pl-1 pb-3 font-medium text-gray-700" >
						{" "} Patrullero:{" "}
					</label>
					<AutocompleteMUI disablePortal fullWidth id="patrullero" options={patrullero}
						onChange={(e) => setFormulario(formulario => ({ ...formulario, "nombre_patrullero": e.target.innerText }))}
						renderInput={(params) => (
							<TextField required {...params} 
							label="Patrullero" />
						)}
					/>
				</div>

				{/* HORA DE RECIBO DE LLAMADA */}
				<div className="col-span-1"> 
					<label htmlFor="hora_incidente" className="block text-sm pl-1 pb-3 font-medium text-gray-700" > 
						{" "} Hora incidente:{" "}
					</label>
					<TextField id="hora_incidente" label="00:00" variant="outlined" fullWidth required
					onChange={(e) => setFormulario(formulario => ({ ...formulario, "hora_evento": e.target.value }))}/>
				</div>

				{/* OBSERVACIONES SOBRE EL INCIDENTE */}
				<div className="col-span-3">
					<label htmlFor="observaciones" className="block text-sm pl-1 pb-3 font-medium text-gray-700">
						{" "}Observaciones:{" "}
					</label>
					<TextField id="observaciones" label="Ingrese las observaciones del incidente." variant="outlined" fullWidth multiline rows={4}
						onChange={(e) => setFormulario(formulario => ({ ...formulario, "observaciones": e.target.value }))}/>
					<div class="m-2">
						<p class="text-opacity-50">Todos los campos con * son requeridos.</p>
					</div>
				</div>

				<div className="col-span-3 flex justify-center mt-6">
					<button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline" type="submit"
						onClick={AlertClick} >
						Guardar Registro
					</button>
				</div>
			</form>
		</div>
	);
};

export default EntryForm;
