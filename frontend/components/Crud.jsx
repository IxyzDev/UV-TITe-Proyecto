"use client";
import { useState, useEffect } from "react";
import CrudForm from "../components/CrudForm";
import CrudTable from "../components/CrudTable";
import Loader from "../components/Loader";
import Message  from "../components/Message";

import { helper } from "@utils/helper";

const Crud = ( {select} ) => {
    const [db, setDB] = useState(null)
    const [dataToEdit, setDataToEdit] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    let api = helper();
    let url = "http://localhost:3005/";

    let ruta = url + select;

    useEffect(() => {
        setLoading(true);
            api.get(ruta).then((res) => {
                if (!res.err) {
                    setDB(res);
                    setError(null);
                } else {
                    setDB(null);
                    setError(res);
                }
            setLoading(false);
        });
        ruta = url + select;
    }, [select])

    const createData = (data) => {
        let options = {
            body: data,
            headers: { "content-type": "application/json" },
          };

        api.post(ruta, options).then((res) => {
            //console.log(res);
            if (!res.err) {
                setDB([...db, res]);
            } else {
                setError(res);
            }
        });
    };

    const updateData = (data) => {
        let endpoint = `${ruta}/${data.id}`;

        let options = {
            body: data,
            headers: { "content-type": "application/json" },
        };
        api.put(endpoint, options).then((res) => {
            if (!res.err) {
              let newData = db.map((el) => (el.id === data.id ? data : el));
              setDB(newData);
            } else {
                setError(res);
            }
        });
    };

    const deleteData = (id) => {
        let isDelete = window.confirm(
            "¿Está seguro que desea eliminar el registro?");
        let endpoint = `${ruta}/${id}`;

        let options = { headers: { "content-type": "application/json" } };

        if (isDelete) {      
            api.del(endpoint, options).then((res) => {
              //console.log(res);
              if (!res.err) {
                let newData = db.filter((el) => el.id !== id);
                setDB(newData);
              } else {
                setError(res);
              }
            });
        } else { return; }
    };

    return (
        <>
            <CrudForm createData={createData} updateData={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit}/>
            {loading && <Loader/>}
            {error && <Message  msg={`Error ${error.status}: ${error.statusText}`} bgColor="#dc3545"/>}
            {db && <CrudTable data={db} setDataToEdit={setDataToEdit} deleteData={deleteData}/>}
        </>
    )
}

export default Crud
