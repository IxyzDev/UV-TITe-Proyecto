import React, { } from 'react';
import { AppProps } from 'next/app';
import '../styles/globals.css'; // Asegúrate de que este archivo de estilos exista o quita esta línea.

import { useJsApiLoader } from '@react-google-maps/api';


function MyApp({ Component, pageProps }: AppProps) {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "",
    libraries: ['places'],
  })

  return <Component {...pageProps} />;
}

export default MyApp;
