import React from 'react';
import { useLoadScript } from "@react-google-maps/api";
import usePlacesAutocomplete, { getGeocode, getLatLng, } from "use-places-autocomplete";
import { TextField } from "@mui/material";
import AutocompleteMUI from "@mui/material/Autocomplete";

const apiKey = "AIzaSyBiEhWbQVjxhbz-zS2PqssIpf_rqIpcmBw"; // Reemplazar API KEY

export default function Places({ formulario, setFormulario,error, helperText }) {
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: apiKey,
		libraries: ["places"],
	});

	if (!isLoaded)
		return <div>Cargando...</div>;
	return <PlacesAutocomplete formulario={formulario} setFormulario={setFormulario} error={error} helperText={helperText}  />
}

function PlacesAutocomplete({ formulario, setFormulario, error, helperText }) {
	const { labelAddress, setValue, suggestions: { data }, clearSuggestions, } = usePlacesAutocomplete();

	const handleSelect = async (address) => {
		if (address && address.label) {
			address = address.label;
			setValue(address, false);
			clearSuggestions();
			const results = await getGeocode({ address });
			const { lat, lng } = await getLatLng(results[0]);
			const coord = lat + "," + lng;
			setFormulario(formulario => ({ ...formulario, "direccion": direccion.value }));
			setFormulario(formulario => ({ ...formulario, "coordenadas": coord }));
		}
	};
	

	const addressOptions = data.map(({ place_id, description }) => ({
		label: description,
		id: place_id,
	}));

	const handleChange = (event, selected) => {
		handleSelect(selected); // Llama a handleSelect con el nuevo valor
	};

	return (
		<>
			<div className="col-span-3">
				<label htmlFor="direccion" className="block text-sm pl-1 pb-3 font-medium text-gray-700" >
					{" "} Dirección:{" "}
				</label>
				<AutocompleteMUI disablePortal fullWidth id="direccion"
					value={labelAddress}
					onChange={handleChange}
					options={addressOptions}
					renderInput={(params) =>
						<TextField required {...params}
							error={error} // Utiliza el prop error para mostrar un estado de error
							helperText={helperText} // Utiliza el prop helperText para mostrar el mensaje de error
							label="Dirección de eventualidad"
							onChange={(e) => { setValue(e.target.value); }}
						/>
					}
				/>
			</div>
		</>
	);
}