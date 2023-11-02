import React, { useState } from 'react';
import Link from 'next/link';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import AutocompleteMUI from '@mui/material/Autocomplete';
import { TextField, FormControlLabel, Radio, RadioGroup } from '@mui/material';

const Alert = withReactContent(Swal);

const AlertClick = () => {
    Alert.fire({
        title: '<p className="text-green-700 font-semibold text-2xl mb-4">Registro Guardado Exitosamente</p>',
        icon: 'success'
    });
};

// MAP API
import { Autocomplete } from '@react-google-maps/api';

interface FormData {
    contribuyente: string;
    sector: string;
    subsector: string;
    uv: string;
    telefono: string;
    nombre: string;
    medio: string;
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

// CODIGO PARA OBTENER TIEMPO Y FECHA ACTUAL
const date = new Date();
//const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const mesesNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

const showTime = 
    date.getFullYear() + "-" + mesesNum[date.getMonth()] + "-" + date.getDate() //AÑO
    + " | " + date.getHours() + ':' + date.getMinutes() + ":" + date.getSeconds() //TIEMPO;

console.log(showTime);

const motivo = [
    { label: 'Riña', id: "motivo" },
    { label: 'Vehiculo mal estacionado', id: "motivo" },
    { label: 'Agresión', id: "motivo" },
];

const movil = [
    { label: 'Derivado', id: "movil" },
    { label: '53', id: "movil" },
    { label: '83', id: "movil" },
];

const patruyero = [
    { label: 'Arenas', id: "patruyero" },
    { label: 'Yañez', id: "patruyero" },
    { label: 'Hevia', id: "patruyero" },
];

const medio = [
    { label: 'Llamada', id: "medio" },
    { label: 'Mensaje', id: "medio"},
    { label: 'WhatsUp', id: "medio" },
];

const sector = [
    { label: 'Sector 1', id: "sector" },
    { label: 'Sector 2', id: "sector"},
    { label: 'Sector 3', id: "sector" },
];
const subsector = [
    { label: 'Subsector 1', id: "subsector" },
    { label: 'Subsector 2', id: "subsector"},
    { label: 'Subsector 3', id: "subsector" },
];
const uv = [
    { label: 'Unidad vecinal 1', id: "uv" },
    { label: 'Unidad vecinal 2', id: "uv"},
    { label: 'Unidad vecinal 3', id: "uv" },
];

const EntryForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        contribuyente: '',
        sector: '',
        subsector: '',
        uv: '',
        telefono: '',
        nombre: '',
        medio: '',
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
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aquí se enviarían los datos a la base de datos
        console.log(formData);
    }

    // NECESSARY FOR INPUTS
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    }

    // NECESSARY FOR RADIOGROUP
    const [showAdditionalFields, setShowAdditionalFields] = useState(false);
    const handleChangeContribuyente = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;

        if (name === 'contribuyente') {
            if (value === 'tercero') {
                setShowAdditionalFields(true);
            } else {
                setShowAdditionalFields(false);
            }
        }
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // DROPDOWN EVENT / SELECTOR DE OPCIONES
    const handleChangeDropDown = (e: { preventDefault: () => void; }, id: any, value: any) => {
        e.preventDefault();
        setFormData(prev => ({ ...prev, [value.id]: value.label }));
    }

    return (
        <div>
            <form noValidate autoComplete='off' onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-lg max-w-5x1 mx-auto mt-20 grid grid-cols-3 gap-4">
                <div className="col-span-2">
                    <h2 className="text-2xl mb-4 text-gray-700">Ingresar Datos de Llamada</h2>
                </div>

                {/* CAMPO QUE INDICA DE DONDE PROVIENE LA INFORMACION (CONTRIBUYENTE)*/}
                <div className="col-span-1">
                    <label htmlFor="contribuyente" className="block text-sm pb-3 font-medium text-gray-700"> Contribuyente: </label>
                    <RadioGroup
                        row aria-labelledby="contribuyente" name='contribuyente' id="contribuyente" onChange={handleChangeContribuyente} value={formData.contribuyente}>
                        <FormControlLabel value="tercero" control={<Radio />} label="Tercero" />
                        <FormControlLabel value="patrullero" control={<Radio />} label="Patrullero" />
                    </RadioGroup>
                </div>

                {showAdditionalFields && formData.contribuyente === 'tercero' && (<>
                    {/* DEBEN APARECER CUANDO CONTRIBUYENTE=TERCERO */}

                    {/* TELEFONO */}
                    <div className="col-span-1">
                        <label htmlFor="telefono" className="block text-sm pb-3 font-medium text-gray-700"> Telefono: </label>
                        <TextField id="telefono" label="Telefono" variant="outlined" fullWidth required onChange={handleChange} value={formData.telefono}/>
                    </div>

                    {/* NOMBRE */}
                    <div className="col-span-1">
                        <label htmlFor="nombre" className="block text-sm pb-3 font-medium text-gray-700"> Nombre: </label>
                        <TextField id="nombre" label="Nombre" variant="outlined" fullWidth onChange={handleChange} value={formData.nombre}/>
                    </div>
                    {/* MEDIO */}
                    <div className="col-span-1">
                        <label htmlFor="medio" className="block text-sm pb-3 font-medium text-gray-700"> Medio: </label>
                        <AutocompleteMUI 
                            disablePortal fullWidth
                            id="medio"
                            options={medio}
                            onChange={handleChangeDropDown}
                            renderInput={(params) => <TextField {...params} label="Medio" />}/>
                    </div>
                </>)}

                {/* COMENTADO PORQUE NO SABEMOS SI LA CONTRAPARTE DARA LOS DATOS PARA ESTO */}
                    {/* SECTOR - SUBSECTOR - UNIDADVECINAL */}
                <div className="col-span-1">
                    <label htmlFor="sector" className="block text-sm pb-3 font-medium text-gray-700">
                        Sector:
                    </label>
                    <AutocompleteMUI 
                        disablePortal fullWidth
                        id="sector"
                        options={sector}
                        onChange={handleChangeDropDown}
                        //filterSelectedOptions
                        renderInput={(params) => <TextField {...params} label="Sector" />}
                    />
                </div>
                <div className="col-span-1">
                    <label htmlFor="subsector" className="block text-sm pb-3 font-medium text-gray-700">
                        Subsector:
                    </label>
                    <AutocompleteMUI 
                        disablePortal fullWidth
                        id="subsector"
                        options={subsector}
                        onChange={handleChangeDropDown}
                        //filterSelectedOptions
                        renderInput={(params) => <TextField {...params} label="Subsector" />}
                    />
                </div>
                <div className="col-span-1">
                    <label htmlFor="uv" className="block text-sm pb-3 font-medium text-gray-700">
                        Unidad vecinal:
                    </label>
                    <AutocompleteMUI 
                        disablePortal fullWidth
                        id="uv"
                        options={uv}
                        onChange={handleChangeDropDown}
                        //filterSelectedOptions
                        renderInput={(params) => <TextField {...params} label="Unidad vecinal" />}
                    />
                </div>


                {/* DIRECCION DEL INCIDENTE */}
                <div className="col-span-3">
                    <label htmlFor="calle" className="block text-sm pb-3 font-medium text-gray-700"> Dirección: </label>
                    <Autocomplete>
                        <TextField id="calle" label="Escribe la Calle" variant="outlined" fullWidth required onChange={handleChange} value={formData.calle} />
                    </Autocomplete>
                </div>
                
                {/* MOTIVO DE LA LLAMADA */}
                {/* PEDIR LISTADO DE LOS QUE DEBEN IR */}
                <div className="col-span-1">
                    <label htmlFor="motivo" className="block text-sm pb-3 font-medium text-gray-700"> Motivo: </label>
                    <AutocompleteMUI
                        disablePortal fullWidth
                        id="motivo"
                        options={motivo}
                        onChange={handleChangeDropDown}
                        renderInput={(params) => <TextField required onChange={handleChange} {...params} label="Motivo" />}
                    />
                </div>

                {/* DETALLE ESPECIFICO DE LO SUCESIDO EN EL EVENTO */}
                <div className="col-span-1">
                    <label htmlFor="detalle" className="block text-sm pb-3 font-medium text-gray-700"> Detalle: </label>
                    <TextField id="detalle" label="Detalle" variant="outlined" fullWidth required onChange={handleChange} value={formData.detalle}/>
                </div>

                {/* GRUPO DELICTUAL */}
                <div className="col-span-1">
                    <label htmlFor="gDelictual" className="block text-sm pb-3 font-medium text-gray-700"> Grupo Delictual: </label>
                    <TextField id="gDelictual" label="Grupo delictual" variant="outlined" fullWidth required onChange={handleChange} value={formData.gDelictual}/>
                </div>

                {/* CASO */}
                <div className="col-span-1">
                    <label htmlFor="caso" className="block text-sm pb-3 font-medium text-gray-700"> Caso: </label>
                    <TextField id="caso" label="Caso" variant="outlined" fullWidth required value={formData.caso} onChange={handleChange}/>
                </div>

                {/* VEHICULO ENVIADO - DELITO DERIVADO */}
                <div className="col-span-1">
                    <label htmlFor="movil" className="block text-sm pb-3 font-medium text-gray-700"> Movil: </label>
                    <AutocompleteMUI
                        disablePortal fullWidth
                        id="movil"
                        onChange={handleChangeDropDown}
                        options={movil}
                        renderInput={(params) => <TextField required {...params} label="Movil" />}
                    />
                </div>

                {/* NOMBRE PATRULLETO ENVIADO */}
                <div className="col-span-1">
                    <label htmlFor="patrullero" className="block text-sm pb-3 font-medium text-gray-700"> Patrullero: </label>
                    <AutocompleteMUI
                        disablePortal fullWidth
                        id="patrullero"
                        onChange={handleChangeDropDown}
                        options={patruyero}
                        renderInput={(params) => <TextField required value={formData.patrullero} {...params} label="patrullero" />}
                    />
                </div>

                {/* OBSERVACIONES SOBRE EL INCIDENTE */}
                <div className="col-span-3">
                    <label htmlFor="observaciones" className="block text-sm pb-3 font-medium text-gray-700"> Observaciones: </label>
                    <TextField id="observaciones" label="Observaciones" variant="outlined" fullWidth multiline rows={4} value={formData.observaciones} onChange={handleChange}/>
                </div>

                
                <div className="col-span-2 flex justify-between mt-6">
                    <Link href="/">
                        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline" type="button">
                            Atrás
                        </button>
                    </Link>
                    <div className="">
                        <button
                            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                            type="submit"
                            onClick={AlertClick}>
                            Guardar Registro
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default EntryForm;