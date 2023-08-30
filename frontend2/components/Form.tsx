/* @jsxRuntime classic */
import React, { useState } from 'react';
import Input from './Input';

const Form: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-lg max-w-lg mx-auto mt-20">
            <Input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" label="Full Name" />
            <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="johndoe@example.com" label="Email Address" />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Submit
            </button>
        </form>
    );
}

export default Form;
