import React, { useState } from 'react';
import Input from './Input';

interface FormData {
    lugar: string;
    hora: string;
    operador: string;
    direccion: string;
    // Agregar campos adicionales según sea necesario
}

const EntryForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        lugar: '',
        hora: '',
        operador: '',
        direccion: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aquí se enviarían los datos a la base de datos
        console.log(formData);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-lg max-w-lg mx-auto mt-20">
            <h2 className="text-2xl mb-4 text-gray-700">Ingresar Datos de Llamada</h2>
            <Input type="text" name="lugar" value={formData.lugar} onChange={handleChange} placeholder="Plaza Belén" label="Lugar" />
            <Input type="time" name="hora" value={formData.hora} onChange={handleChange} label="Hora" />
            <Input type="text" name="operador" value={formData.operador} onChange={handleChange} placeholder="Juan Pérez" label="Operador" />
            <Input type="text" name="direccion" value={formData.direccion} onChange={handleChange} placeholder="Calle Principal 123" label="Dirección" />
            {/* Agregar otros campos de la misma manera */}
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Agregar Llamada
            </button>
        </form>
    );
}

export default EntryForm;
