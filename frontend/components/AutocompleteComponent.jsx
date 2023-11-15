import React, { useRef, useState } from "react";
import {
  useJsApiLoader,
  Autocomplete as GoogleAutocomplete,
} from "@react-google-maps/api";
import { TextField } from "@mui/material";

const apiKey = ""; // Reemplaza con tu clave API real

const AutocompleteComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const autocompleteRef = useRef(null);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apiKey,
    libraries: ["places"],
  });

  const onPlaceSelected = (place) => {
    if (place) {
      setInputValue(place.formatted_address || "");
    }
  };

  if (!isLoaded) {
    return <div>Cargando...</div>;
  }

  return (
    <GoogleAutocomplete
      onLoad={(autocomplete) => (autocompleteRef.current = autocomplete)}
      onPlaceChanged={() => onPlaceSelected(autocompleteRef.current.getPlace())}
    >
      <TextField
        id="calle"
        label="Escribe la Calle"
        variant="outlined"
        fullWidth
        required
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </GoogleAutocomplete>
  );
};

export default AutocompleteComponent;
