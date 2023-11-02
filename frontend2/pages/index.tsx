import React from 'react';
import Link from 'next/link';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Stack } from '@mui/material';


const mockData = [ // Datos ficticios para visualizar en la tabla.
    { lugar: 'Plaza Belén', hora: '12:00', operador: 'Juan Pérez', direccion: 'Calle Principal 123' },
    // ...otros registros
];

const Home: React.FC = () => {
    return (
        <div className="bg-gray-200 min-h-screen flex flex-col items-center">
            {/* Topbar */}
            <div className="bg-orange-500 py-4 w-full">
                <h1 className="text-4xl text-white text-center">Sistema de Registro - Seguridad Ciudadana Viña del Mar</h1>
            </div>
            
            {/* Contenido */}
            <div className="flex flex-col items-center justify-center flex-grow">
                <Stack spacing={20} direction="row">
                    <Link href="/EntryForm">
                        <button className="bg-orange-500 w-96 h-96 hover:bg-orange-600 text-white text-2xl font-bold py-4 px-8 rounded-3xl focus:outline-none focus:shadow-outline mr-9">
                            Crear Nuevo Registro
                        </button>
                    </Link>
                    <Link href="/DataView">
                        <button className="bg-orange-500 w-96 h-96 hover:bg-orange-600 text-white text-2xl font-bold py-4 px-8 rounded-3xl focus:outline-none focus:shadow-outline mr-9">
                            Ver Listado de Registros
                        </button>
                    </Link>
                </Stack>
            </div>
        </div>
    );
}

export default Home;
