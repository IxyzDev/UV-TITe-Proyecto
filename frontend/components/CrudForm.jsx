"use client";
import { useState, useEffect } from "react";

const initialForm = {
    id: null,
    label: "",
}

const CrudForm = ( {createData, updateData, dataToEdit, setDataToEdit} ) => {
    const [form, setForm] = useState(initialForm);

    const handleChange = (e) => {
        setForm({...form,[e.target.name]:e.target.value,});
    };
    const handleSubmit = (e) => {
        //e.preventDedault();
        if(!form.label){
            alert("Datos incompletos");
            return;
        }
        if(form.id === null){
            createData(form);
        }else{
            updateData(form);
        }

        handleReset();
    };
    const handleReset = (e) => {
        setForm(initialForm);
        setDataToEdit(null);
    };

    useEffect(() => {
        if(dataToEdit){
            setForm(dataToEdit);
        }else{
            setForm(initialForm);
        }
    }, [dataToEdit]);

    return (
        <div className="bg-white shadow-lg w-5/6 mx-auto mt-10 overflow-auto">

            <h3 className="px-6 py-3 pt-6 text-xm font-medium text-gray-500 uppercase tracking-wider">{dataToEdit ? `Editar dato seleccionado: ${dataToEdit.label}` : "Agregar un nuevo dato"}</h3>
            <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-lg max-w-5x1 mx-auto grid grid-cols-3 gap-4">
                <input type="text" className="border p-4" name='label' placeholder='Dato a agregar' onChange={handleChange} value={form.label}/>
                <input type="submit" className="bg-orange-500 hover:bg-orange-600 border text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline" value="Enviar"/>
                <input type="reset" className=" hover:bg-gray-200 border font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline" value="Limpiar" onClick={handleReset}/>
            </form>
        </div>
    )
}

export default CrudForm;
