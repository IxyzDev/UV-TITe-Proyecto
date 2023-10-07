import React from 'react';
import EntryForm from '../components/EntryForm';
import DataView from '../components/DataView';
import Link from 'next/link';
import { useActionData } from 'react-router-dom';
import { data } from 'autoprefixer';

const mockData = [ // Datos ficticios para visualizar en la tabla.
    { lugar: 'Plaza Belén', hora: '12:00', operador: 'Juan Pérez', direccion: 'Calle Principal 123' },
    // ...otros registros
];

const Home: React.FC = () => {
    return (
      <div className="bg-gray-200 min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl mb-8 text-blue-600">Sistema de Registro - Seguridad Ciudadana Viña del Mar</h1>
        <DataView data={mockData}/>
      </div>
    );
  }
  
  export default Home;
