"use client";
import { usePathname, useRouter } from "next/navigation";
import Link from 'next/link';

const DataView = ({ data, onDelete, onEdit, isAdmin }) => {
    const pathName = usePathname();
    const router = useRouter();
    return (
        <div className="bg-white p-8 shadow-lg w-5/6 mx-auto mt-20 overflow-auto">
            {/* BOTON PARA VOLVER A PANTALLA PRINCIPAL */}
            <div className="col-span-2 flex justify-between mt-6">
                <button onClick={() => router.push("/menu")} className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline" type="button">
                    Atrás
                </button>
            </div>
            {/*<h2 className="text-2xl mb-4 text-gray-700">Llamadas Registradas</h2>*/}
            <table className="min-w-full divide-y p-8 divide-gray-200 text-center">
                <thead>
                    <tr>
                        <th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Lugar</th>
                        <th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
                        <th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Operador</th>
                        <th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Dirección</th>
                        {isAdmin && (
                        <th className="px-6 py-3 bg-gray-50">Acciones</th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {data.map((entry, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                            <td className="px-6 py-4 whitespace-no-wrap">{entry.lugar}</td>
                            <td className="px-6 py-4 whitespace-no-wrap">{entry.fecha}</td>
                            <td className="px-6 py-4 whitespace-no-wrap">{entry.operador}</td>
                            <td className="px-6 py-4 whitespace-no-wrap">{entry.direccion}</td>
                            {/* Otros campos de datos */}
                            {isAdmin && (
                            <td className="px-6 py-4 whitespace-no-wrap">
                                <button onClick={() => onEdit(entry)} className="text-indigo-600 hover:text-indigo-900">Editar</button>
                                <button onClick={() => onDelete(entry.id)} className="text-red-600 hover:text-red-900 ml-4">Eliminar</button>
                            </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DataView;
