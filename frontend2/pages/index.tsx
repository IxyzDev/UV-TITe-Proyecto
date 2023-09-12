import React from 'react';
import EntryForm from '../components/EntryForm';
import DataView from '../components/DataView';
import MapBox from '../components/MapBox';
import Link from 'next/link';

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
                <div className="flex"> {/* Contenedor de botones */}
                    <div className="flex-grow flex justify-center"> {/* Espacio para centrar */}
                        <Link href="/EntryForm">
                            <button className="bg-orange-500 hover:bg-orange-700 text-white text-2xl font-bold py-4 px-8 rounded-full focus:outline-none focus:shadow-outline mr-9">
                                Crear Nuevo Registro
                            </button>
                        </Link>
                    </div>
                    <div> {/* Espacio para el botón derecho */}
                        <Link href="/EntryForm">
                            <button className="bg-orange-500 hover:bg-orange-700 text-white text-2xl font-bold py-4 px-8 rounded-full focus:outline-none focus:shadow-outline ml-9">
                                Ver Listado de Registros
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
