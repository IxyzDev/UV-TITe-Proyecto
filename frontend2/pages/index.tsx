import React from 'react';
import EntryForm from '../components/EntryForm';
import DataView from '../components/DataView';

const mockData = [ // Datos ficticios para visualizar en la tabla.
    { lugar: 'Plaza Belén', hora: '12:00', operador: 'Juan Pérez', direccion: 'Calle Principal 123' },
    // ...otros registros
];

const Home: React.FC = () => {
    return (
        <div className="bg-gray-200 min-h-screen p-8">
            <h1 className="text-4xl mb-8 text-blue-600 text-center">Sistema de Registro - Seguridad Ciudadana Viña del Mar</h1>
            <EntryForm />
            <DataView data={mockData} />
        </div>
    );
}

export default Home;
