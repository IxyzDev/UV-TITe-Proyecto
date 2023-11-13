import React from 'react';
import Link from 'next/link';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Stack} from '@mui/material';
import header from '../styles/header.module.css';

const Home: React.FC = () => {
    return (
      <div className="bg-gray-200 min-h-screen flex flex-col items-center">
        {/* Topbar */}
        <div className={header.header}>
            <h1 className={header.title}>Registro de Eventualidades</h1>
        </div>
  
        {/* Contenido */}
        <div className="flex flex-col items-center justify-center flex-grow">
        <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 8 }}
            >
            <Link href="/EntryForm">
                <button className="bg-orange-500 w-4/5 md:w-96 md:h-64 hover:bg-orange-600 text-white text-2xl font-bold py-4 px-8 rounded-3xl focus:outline-none focus:shadow-outline mb-6 md:mb-0 mx-6 md:mx-0">
                    Crear Nuevo Registro
                </button>
            </Link>
            <Link href="/DataView">
                <button className="bg-orange-500 w-4/5 md:w-96 md:h-64 hover:bg-orange-600 text-white text-2xl font-bold py-4 px-8 rounded-3xl focus:outline-none focus:shadow-outline mb-6 md:mb-0 mx-6 md:mx-0">
                    Ver Listado de Registros
                </button>
            </Link>
          </Stack>
        </div>
      </div>
    );
};

export default Home;
