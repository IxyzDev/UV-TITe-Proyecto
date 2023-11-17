import React from 'react';
import { useLoadScript } from "@react-google-maps/api";
import usePlacesAutocomplete, { getGeocode, getLatLng, } from "use-places-autocomplete";
import { TextField } from "@mui/material";
import AutocompleteMUI from "@mui/material/Autocomplete"; 

const apiKey = "AIzaSyBiEhWbQVjxhbz-zS2PqssIpf_rqIpcmBw"; // Reemplazar API KEY

export default function Places() {
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: apiKey,
		libraries: ["places"],
	});

	if (!isLoaded) 
		return <div>Loading...</div>;
		return <PlacesAutocomplete/>;
}

function PlacesAutocomplete({ }) {
	const {
		value,
		setValue,
		suggestions: { data },
		clearSuggestions,
	} = usePlacesAutocomplete();

	const handleSelect = async (address) => {
		if (address && address.label) {
			address = address.label;
			setValue(address, false);
			clearSuggestions();
		
			const results = await getGeocode({ address });
			const { lat, lng } = await getLatLng(results[0]);

			console.log("Address:", address);
			console.log("Latitude:", lat);
			console.log("Longitude:", lng);
		}
	};
	
	const transformedData = data.map(({ place_id, description }) => ({
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
				<AutocompleteMUI 
					value={value}
					onChange={handleChange}
					id="controllable-states-demo"
					options={transformedData}
					renderInput={(params) => <TextField {...params} label="Dirección de eventualidad" onChange={(e) => { setValue(e.target.value); }}/>}
				/>
			</div>
		</>
	);
}