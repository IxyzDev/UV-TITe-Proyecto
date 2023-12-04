"use client";
import { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { useRouter } from "next/navigation";
import data from "../utils/data.json";

const SelectCrud = ( {setSeleccion} ) => {
    const router = useRouter();

    const options = Object.keys(data);

    /* Object.keys(data).forEach((key) => {
        //console.log(key, data[key]);
    }); */

    const [selected, setSelected] = useState(null);
    useEffect(() => {
        setSeleccion(selected);
    }, [selected])
    

    return (
        <>
            <div className="col-span-2 flex justify-between mt-6 ml-8">
                <button onClick={() => router.push("/")} className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline" type="button">
                    Atrás
                </button>
            </div>
            <div className="bg-white p-4 shadow-lg mb-8 w-5/6 mx-auto mt-10 overflow-auto">
                
                <label className="block pl-1 pb-4 px-6 py-8 pt-10 text-l font-medium text-gray-700 uppercase">
                    {" "} Tabla que desea modificar: {" "}
                </label>
                <Autocomplete disablePortal fullWidth id="selectCrud" options={options}
                    onChange={(e) => setSelected( e.target.innerText)}
                    renderInput={(params) => <TextField required {...params} label="Selección" />}
                />
            </div>
        </>
    )
}

export default SelectCrud;