import React from 'react';

interface InputProps {
    type: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    label?: string;
    addon?: React.ReactNode; // Agregamos un addon opcional
}

const Input: React.FC<InputProps> = ({ type, name, value, onChange, placeholder, label, addon }) => {
    return (
        <div className="mb-4">
            {label && <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>{label}</label>}
            <div className="relative">
                <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type={type} 
                    name={name} 
                    id={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                />
                {addon && <div className="absolute inset-y-0 right-0 pr-3 flex items-center">{addon}</div>}
            </div>
        </div>
    );
}

export default Input;
