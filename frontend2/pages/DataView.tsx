import React from 'react';
import DataView from '../components/DataView';

const mockData = [ // Datos ficticios para visualizar en la tabla.
    { lugar: 'Plaza Belén', fecha: '4/10/2023 12:00', operador: 'Juan Pérez', direccion: 'Calle Principal 123' },
    { lugar: 'Universidad', fecha: '4/10/2023 14:10', operador: 'Juan Pérez', direccion: 'General Cruzz' },
    // ...otros registros
];

const Home: React.FC = () => {
    return (
      <div className="bg-gray-200 min-h-screen flex flex-col items-center">
        {/* Topbar */}
        <div className="bg-orange-500 py-4 w-full">
          <h1 className="text-4xl text-white text-center">Sistema de Registro - Seguridad Ciudadana Viña del Mar</h1>
        </div>

        <DataView data={mockData}/>
      </div>
    );
  }
  
  export default Home;
