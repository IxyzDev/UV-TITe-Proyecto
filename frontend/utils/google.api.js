import { useJsApiLoader } from "@react-google-maps/api";

let isConnected = false;
const apiKey = "";

export const googleApi = async () => {
  try {
    if (isConnected) {
      console.log("Ya esta conectado");
      return;
    }

    const conexion = await useJsApiLoader({
      id: "google-map-script",
      googleMapsApiKey: apiKey,
      libraries: ["places"],
    });

    isConnected = true;

    return conexion;
  } catch (error) {
    console.log(error);
  }

  return isLoaded;
};
