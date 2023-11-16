"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import data from "../utils/data.json"; // Datos para desplegables.
import Swal from "sweetalert2"; // Alertas 
import withReactContent from "sweetalert2-react-content";
import AutocompleteMUI from "@mui/material/Autocomplete";
import { TextField, Radio, RadioGroup, FormControlLabel } from "@mui/material";
// API Google
import AutocompleteComponent from "../components/AutocompleteComponent";
import { useRouter } from "next/navigation";

const motivo = data.motivo;
const movil = data.movil;
const patrullero = data.patrullero;
const medio_comunicacion = data.medio_comunicacion;
/* const sector = data.sector;
const subsector = data.subsector;
const uv = data.uv; */

const Alert = withReactContent(Swal);
const AlertClick = () => {
	Alert.fire({
		title: '<p className="text-green-700 font-semibold text-2xl mb-4">Registro Guardado Exitosamente</p>',
		icon: "success",
	});
};

// CODIGO PARA OBTENER TIEMPO Y FECHA ACTUAL
const date = new Date();
//const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const mesesNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12",];
const fecha = date.getFullYear() + "-" + mesesNum[date.getMonth()] + "-" + date.getDate();
const hora = date.getHours() + ":" + date.getMinutes() + ":" + "00";

const EntryForm = () => {
	const router = useRouter();

	// Fomato de datos enviados
	const [formData, setFormData] = useState({
		fecha: fecha,
		hora: hora,
		detalle: "",
		observaciones: "",
		motivo: "",
		grupo_delictual: "",
		contribuyente: "tercero",
		derivado: "", // ¿a qué hace referencia?

		direccion: "",
		coordenadas: "",

		medio_comunicacion: "",
		nombre_contribuyente: "",
		telefono: "",

		// Ver bien esto
		/* nombre_funcionario: "",
		apellido_funcionario: "",
		tipo_funcionario: "", */

		caso: "", // para que sirve esto
		movil: "",
		patrullero: "", // hasta ahora indica el nombre del patrullero
	});
	const [errors, setErrors] = useState({});

	const validatePhone = (phone) => {
		return /^\d+$/.test(phone);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		let localErrors = {};

		// Validación de medio de comunicación
		if (!formData.medio_comunicacion) {
			localErrors.medio_comunicacion = 'El medio de comunicación es obligatorio.';
		}
		if (!formData.direccion) {
			localErrors.direccion = 'La dirección es obligatoria.';
		}
		if (!formData.motivo) {
			localErrors.motivo = 'El motivo es obligatorio.';
		}
		if (!formData.detalle) {
			localErrors.detalle = 'El detalle es obligatorio.';
		}
		if (!formData.caso) {
			localErrors.caso = 'El caso es obligatorio.';
		}
		if (!formData.movil) {
			localErrors.movil = 'El movil es obligatorio.';
		}
		if (!formData.patrullero) {
			localErrors.patrullero = 'El patrullero es obligatorio.';
		}

		if (Object.keys(localErrors).length > 0) {
			setErrors(localErrors);
		} else {
			console.log(formData);
			AlertClick();
		}

	};

	// INPUTS
	const handleChange = (e) => {
		const { id, value } = e.target;
		if (id === 'telefono') {
			if (value === '' || validatePhone(value)) {
				setFormData((prev) => ({ ...prev, [id]: value }));
			}
		} else {
			setFormData((prev) => ({ ...prev, [id]: value }));
		}
	};

	// RADIOGROUP
	useEffect(() => {
		// Verificar el valor inicial y mostrar u ocultar campos adicionales
		if (formData.contribuyente === "tercero") {
			setShowAdditionalFields(true);
		} else {
			setShowAdditionalFields(false);
		}
	}, []);
	const [showAdditionalFields, setShowAdditionalFields] = useState(false);
	const handleChangeContribuyente = (e) => {
		const { name, value } = e.target;

		if (name === "contribuyente") {
			if (value === "tercero") {
				setShowAdditionalFields(true);
			} else {
				setShowAdditionalFields(false);
			}
		}
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	// DROPDOWN EVENT / SELECTOR DE OPCIONES
	const handleChangeDropDown = (e, value) => {
		e.preventDefault();
		setFormData(prev => ({ ...prev, [value.id]: value.label }));
	}

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
						<RadioGroup aria-labelledby="contribuyente" name="contribuyente" id="contribuyente" onChange={handleChangeContribuyente} value={formData.contribuyente}>
							<FormControlLabel value="tercero" control={<Radio />} label="Tercero" />
							<FormControlLabel value="patrullero" control={<Radio />} label="Patrullero" />
						</RadioGroup>
					</div>
				</div>

				{showAdditionalFields && formData.contribuyente === "tercero" && (<>
					{/* TELEFONO */}
					<div className="col-span-1">
						<label htmlFor="telefono" className="block text-sm pb-3 font-medium text-gray-700" >
							{" "} Telefono:{" "}
						</label>
						<TextField id="telefono" label="Telefono" variant="outlined" fullWidth required onChange={handleChange} value={formData.telefono} error={!!errors.telefono} helperText={errors.telefono} />
					</div>

					{/* NOMBRE */}
					<div className="col-span-1">
						<label htmlFor="nombre_contribuyente" className="block text-sm pb-3 font-medium text-gray-700" >
							{" "} Nombre:{" "}
						</label> {/* id="nombre_contribuyente" */}
						<TextField id="nombre_contribuyente" label="Nombre" variant="outlined" fullWidth onChange={handleChange} value={formData.nombre_contribuyente} />
					</div>
					{/* MEDIO */}
					<div className="col-span-1">
						<label htmlFor="medio_comunicacion" className="block text-sm pb-3 font-medium text-gray-700" >
							{" "} Medio de comunicacion:{" "}
						</label>
						<AutocompleteMUI
							disablePortal
							fullWidth
							id="medio_comunicacion"
							options={medio_comunicacion}
							onChange={(event, value) => {
								setFormData(prev => ({
									...prev,
									medio_comunicacion: value ? value.label : ''
								}));
							}}
							renderInput={(params) => (
								<TextField
									{...params}
									required
									label="Medio"
									error={!!errors.medio_comunicacion}
									helperText={errors.medio_comunicacion || ' '}
								/>
							)}
						/>
					</div>
				</>
				)}

				{/* DIRECCION DEL INCIDENTE */}
				<div className="col-span-3">
					<label htmlFor="direccion" className="block text-sm pb-3 font-medium text-gray-700">
						{" "}Dirección:{" "}
					</label>
					<AutocompleteComponent
						handleChange={handleChange}
						data={formData.direccion}
						error={!!errors.direccion}
						helperText={errors.direccion}
					/>
					{errors.direccion && (
						<p className="text-red-500 text-xs italic">{errors.direccion}</p>
					)}
				</div>

				{/* MOTIVO DE LA LLAMADA */}
				{/* PEDIR LISTADO DE LOS QUE DEBEN IR */}
				<div className="col-span-1">
					<label htmlFor="motivo" className="block text-sm pb-3 font-medium text-gray-700" >
						{" "} Motivo:{" "}
					</label>
					<AutocompleteMUI
							disablePortal
							fullWidth
							id="motivo"
							options={motivo}
							onChange={(event, value) => {
								setFormData(prev => ({
									...prev,
									motivo: value ? value.label : ''
								}));
							}}
							renderInput={(params) => (
								<TextField
									{...params}
									required
									label="Motivo"
									error={!!errors.motivo}
									helperText={errors.motivo || ' '}
								/>
							)}
						/>
					</div>

				{/* DETALLE ESPECIFICO DE LO SUCESIDO EN EL EVENTO */}
				<div className="col-span-1">
					<label htmlFor="detalle" className="block text-sm pb-3 font-medium text-gray-700" >
						{" "} Detalle:{" "}
					</label>
					<TextField id="detalle" label="Detalle" variant="outlined" fullWidth required onChange={handleChange} value={formData.detalle} error={!!errors.detalle} helperText={errors.detalle}/>
				</div>

				{/* GRUPO DELICTUAL */}
				<div className="col-span-1">
					<label htmlFor="grupo_delictual" className="block text-sm pb-3 font-medium text-gray-700" >
						{" "} Grupo Delictual:{" "}
					</label>
					<TextField id="grupo_delictual" label="Grupo delictual" variant="outlined" fullWidth required onChange={handleChange} value={formData.grupo_delictual}  />
				</div>

				{/* CASO */}
				<div className="col-span-1">
					<label htmlFor="caso" className="block text-sm pb-3 font-medium text-gray-700" >
						{" "} Caso:{" "}
					</label>
					<TextField id="caso" label="Caso" variant="outlined" fullWidth required value={formData.caso} onChange={handleChange} error={!!errors.caso} helperText={errors.caso} />
				</div>

				{/* VEHICULO ENVIADO - DELITO DERIVADO */}
				<div className="col-span-1">
					<label htmlFor="movil" className="block text-sm pb-3 font-medium text-gray-700" >
						{" "} Movil:{" "}
					</label>
					<AutocompleteMUI
							disablePortal
							fullWidth
							id="movil"
							options={movil}
							onChange={(event, value) => {
								setFormData(prev => ({
									...prev,
									movil: value ? value.label : ''
								}));
							}}
							renderInput={(params) => (
								<TextField
									{...params}
									required
									label="Movil"
									error={!!errors.movil}
									helperText={errors.movil || ' '}
								/>
							)}
						/>
					</div>

				{/* NOMBRE PATRULLETO ENVIADO */}
				<div className="col-span-1">
					<label htmlFor="patrullero" className="block text-sm pb-3 font-medium text-gray-700" >
						{" "} Patrullero:{" "}
					</label>
					<AutocompleteMUI
							disablePortal
							fullWidth
							id="patrullero"
							options={patrullero}
							onChange={(event, value) => {
								setFormData(prev => ({
									...prev,
									patrullero: value ? value.label : ''
								}));
							}}
							renderInput={(params) => (
								<TextField
									{...params}
									required
									label="Patrullero"
									error={!!errors.patrullero}
									helperText={errors.patrullero || ' '}
								/>
							)}
						/>
					</div>

				{/* OBSERVACIONES SOBRE EL INCIDENTE */}
				<div className="col-span-3">
					<label htmlFor="observaciones" className="block text-sm pb-3 font-medium text-gray-700">
						{" "} Observaciones:{" "}
					</label>
					<TextField id="observaciones" label="Observaciones" variant="outlined" fullWidth multiline rows={4} value={formData.observaciones} onChange={handleChange} />
				</div>

				<div className="col-span-3 flex justify-center mt-6">
					<button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline" type="submit"

					>
						Guardar Registro
					</button>
				</div>
			</form>
		</div>
	);
};

export default EntryForm;
