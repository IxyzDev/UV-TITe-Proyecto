import React, { useEffect, useRef, useState } from 'react';
import mapboxgl, { LngLatLike } from 'mapbox-gl';

const MapBox: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const [map, setMap] = useState<mapboxgl.Map | null>(null);
  const [markers, setMarkers] = useState<mapboxgl.Marker[]>([]);

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2FsaW5hc3NzcyIsImEiOiJjbGx4OG5xZGwxeW11M21zNXczdzZmcjk0In0.SxJR9fbPtdxXig-Spfew2Q';
    if (mapContainerRef.current) {
      const newMap = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-71.5413, -33.0246], // Coordenadas de Viña del Mar
        zoom: 12,
        maxBounds: [[-71.5903, -33.0737], [-71.4923, -32.9926]] // Limita la vista a la zona de Viña del Mar
      });

      newMap.on('click', (e) => {
        const marker = new mapboxgl.Marker().setLngLat(e.lngLat).addTo(newMap);
        setMarkers((prevMarkers) => [...prevMarkers, marker]);
      });

      setMap(newMap);

      return () => {
        newMap.remove();
      };
    }
  }, []);

  // Función para obtener las coordenadas de todos los marcadores
  const getMarkerCoordinates = (): LngLatLike[] => {
    return markers.map((marker) => marker.getLngLat());
  };


  return (
    <div>
      <div ref={mapContainerRef} style={{ width: '100%', height: '400px' }} />
      <div>
        <h2>Marcadores Agregados</h2>
        <ul>
          {markers.map((marker, index) => (
            <li key={index}>{`Marcador ${index + 1}: Longitud ${marker.getLngLat().lng}, Latitud ${marker.getLngLat().lat}`}</li>
          ))}
        </ul>
      </div>
      <button onClick={() => console.log(getMarkerCoordinates())}>Obtener Coordenadas</button>
    </div>
  );
};

export default MapBox;
