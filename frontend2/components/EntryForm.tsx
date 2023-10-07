import React, { useState } from 'react';
import Input from './Input';
import Link from 'next/link';

// MAP API
import { Autocomplete } from '@react-google-maps/api';

interface FormData {
    pantalla: string;
    sector: string;
    subsector: string;
    uv: string;
    calle: string;
    lugar: string;
    numero: string;
    motivo: string;
    detalle: string;
    gDelictual: string;
    caso: string;
    movil: string;
    patrullero: string;
    observaciones: string;
}

const SuccessModal = ({ onClose }: { onClose: () => void }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded shadow-lg max-w-5xl mx-auto">
                <p className="text-green-700 font-semibold text-2xl mb-4">
                    Registro Guardado Exitosamente
                </p>
                <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                    onClick={onClose}
                >
                    Volver
                </button>
            </div>
        </div>
    );
};

const EntryForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        pantalla: '',
        sector: '',
        subsector: '',
        uv: '',
        calle: '',
        lugar: '',
        numero: '',
        motivo: '',
        detalle: '',
        gDelictual: '',
        caso: '',
        movil: '',
        patrullero: '',
        observaciones: '',
    });

    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false); // Agregamos el estado para mostrar el mensaje de éxito
    const [showSaveButton, setShowSaveButton] = useState(true);
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aquí se enviarían los datos a la base de datos
        console.log(formData);
        setShowSuccessMessage(true); // Mostrar el mensaje de éxito después de enviar el formulario
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }
    const handleCloseModal = (): void => {
        setShowSuccessModal(false);
    };


    return (
        <div>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-lg max-w-5x1 mx-auto mt-20 grid grid-cols-3 gap-4">
                <div className="col-span-2">
                    <h2 className="text-2xl mb-4 text-gray-700">Ingresar Datos de Llamada</h2>
                </div>
                <div className="col-span-1">
                    <label htmlFor="pantalla" className="block text-sm font-medium text-gray-700">
                        Pantalla:
                    </label>
                    <select
                        id="pantalla"
                        name="pantalla"
                        value={formData.pantalla}
                        onChange={handleSelectChange}
                        className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    >
                        <option value="">Selecciona Pantalla</option>
                        <option value="Opción 1">Opción 1</option>
                        <option value="Opción 2">Opción 2</option>
                        {/* Agrega más opciones según sea necesario */}
                    </select>
                </div>
                <div className="col-span-1">
                    <label htmlFor="sector" className="block text-sm font-medium text-gray-700">
                        Sector:
                    </label>
                    <select
                        id="sector"
                        name="sector"
                        value={formData.sector}
                        onChange={handleSelectChange}
                        className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    >
                        <option value="">Selecciona Sector</option>
                        <option value="Opción 1">Opción 1</option>
                        <option value="Opción 2">Opción 2</option>
                        {/* Agrega más opciones según sea necesario */}
                    </select>
                </div>
                <div className="col-span-1">
                    <label htmlFor="subsector" className="block text-sm font-medium text-gray-700">
                        Subsector:
                    </label>
                    <select
                        id="subsector"
                        name="subsector"
                        value={formData.subsector}
                        onChange={handleSelectChange}
                        className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    >
                        <option value="">Selecciona Subsector</option>
                        <option value="Opción 1">Opción 1</option>
                        <option value="Opción 2">Opción 2</option>
                        {/* Agrega más opciones según sea necesario */}
                    </select>
                </div>
                <div className="col-span-1">
                    <label htmlFor="uv" className="block text-sm font-medium text-gray-700">
                        UV:
                    </label>
                    <select
                        id="uv"
                        name="uv"
                        value={formData.uv}
                        onChange={handleSelectChange}
                        className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    >
                        <option value="">Selecciona UV</option>
                        <option value="Opción 1">Opción 1</option>
                        <option value="Opción 2">Opción 2</option>
                        {/* Agrega más opciones según sea necesario */}
                    </select>
                </div>
                <div className="col-span-1">
                    <label htmlFor="calle" className="block text-sm font-medium text-gray-700">
                        Calle:
                    </label>

                    <Autocomplete>
                        <Input type="text" name="calle" value={formData.calle} onChange={handleChange} placeholder="Escribe la Calle"/>
                    </Autocomplete>

                </div>
                <div className="col-span-1">
                    <label htmlFor="lugar" className="block text-sm font-medium text-gray-700">
                        Lugar:
                    </label>
                    <Input type="text" name="lugar" value={formData.lugar} onChange={handleChange} placeholder="Escribe el Lugar" />
                </div>
                <div className="col-span-1">
                    <label htmlFor="numero" className="block text-sm font-medium text-gray-700">
                        Numero:
                    </label>
                    <Input type="text" name="numero" value={formData.numero} onChange={handleChange} placeholder="Escribe el Número" />
                </div>
                <div className="col-span-1">
                    <label htmlFor="motivo" className="block text-sm font-medium text-gray-700">
                        Motivo:
                    </label>
                    <select
                        id="motivo"
                        name="motivo"
                        value={formData.motivo}
                        onChange={handleSelectChange}
                        className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    >
                        <option value="">Selecciona Motivo</option>
                        <option value="Opción 1">Opción 1</option>
                        <option value="Opción 2">Opción 2</option>
                        {/* Agrega más opciones según sea necesario */}
                    </select>
                </div>
                <div className="col-span-1">
                    <label htmlFor="detalle" className="block text-sm font-medium text-gray-700">
                        Detalle:
                    </label>
                    <Input type="text" name="detalle" value={formData.detalle} onChange={handleChange} placeholder="Escribe el Detalle" />
                </div>
                <div className="col-span-1">
                    <label htmlFor="gDelictual" className="block text-sm font-medium text-gray-700">
                        G. Delictual:
                    </label>
                    <select
                        id="gDelictual"
                        name="gDelictual"
                        value={formData.gDelictual}
                        onChange={handleSelectChange}
                        className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    >
                        <option value="">Selecciona G. Delictual</option>
                        <option value="Opción 1">Opción 1</option>
                        <option value="Opción 2">Opción 2</option>
                        {/* Agrega más opciones según sea necesario */}
                    </select>
                </div>
                <div className="col-span-1">
                    <label htmlFor="caso" className="block text-sm font-medium text-gray-700">
                        Caso:
                    </label>
                    <Input type="text" name="caso" value={formData.caso} onChange={handleChange} placeholder="Escribe el Caso" />
                </div>
                <div className="col-span-1">
                    <label htmlFor="movil" className="block text-sm font-medium text-gray-700">
                        Móvil:
                    </label>
                    <select
                        id="movil"
                        name="movil"
                        value={formData.movil}
                        onChange={handleSelectChange}
                        className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    >
                        <option value="">Selecciona Móvil</option>
                        <option value="Opción 1">Opción 1</option>
                        <option value="Opción 2">Opción 2</option>
                        {/* Agrega más opciones según sea necesario */}
                    </select>
                </div>
                <div className="col-span-1">
                    <label htmlFor="patrullero" className="block text-sm font-medium text-gray-700">
                        Patrullero:
                    </label>
                    <select
                        id="patrullero"
                        name="patrullero"
                        value={formData.patrullero}
                        onChange={handleSelectChange}
                        className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    >
                        <option value="">Selecciona Patrullero</option>
                        <option value="Opción 1">Opción 1</option>
                        <option value="Opción 2">Opción 2</option>
                        {/* Agrega más opciones según sea necesario */}
                    </select>
                </div>
                <div className="col-span-2">
                    <label htmlFor="observaciones" className="block text-sm font-medium text-gray-700">
                        Observaciones:
                    </label>
                    <Input type="text" name="observaciones" value={formData.observaciones} onChange={handleChange} placeholder="Escribe Observaciones" />
                </div>
                <div className="col-span-2 flex justify-between mt-6">
                    <Link href="/">
                        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline" type="button">
                            Atrás
                        </button>
                    </Link>
                    <div>
                        {showSuccessMessage && (
                            <div className="bg-green-100 p-4 mb-4 rounded-md border border-green-400">
                                <p className="text-green-700 font-semibold">Registro Guardado Exitosamente</p>
                                <button
                                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                                    onClick={handleCloseModal}
                                >
                                    Volver
                                </button>
                            </div>
                        )}
                        {showSaveButton && ( // Renderiza el botón "Guardar Registro" solo si showSaveButton es true
                            <button
                                className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Guardar Registro
                            </button>
                        )}
                    </div>
                </div>
            </form>
            {showSuccessModal && <SuccessModal onClose={handleCloseModal} />} {/* Mostrar el modal */}
        </div>
    );
}

export default EntryForm;
