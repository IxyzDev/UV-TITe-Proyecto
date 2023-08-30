import React from 'react';

interface DataProps {
    data: any[]; // Esta sería una lista de los registros. En una aplicación real, se definirían tipos más específicos.
}

const DataView: React.FC<DataProps> = ({ data }) => {
    return (
        <div className="bg-white p-8 rounded shadow-lg max-w-2xl mx-auto mt-20 overflow-auto">
            <h2 className="text-2xl mb-4 text-gray-700">Llamadas Registradas</h2>
            <table className="min-w-full divide-y divide-gray-200">
                <thead>
                    <tr>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Lugar</th>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Hora</th>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Operador</th>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Dirección</th>
                        {/* Otros encabezados de columna */}
                    </tr>
                </thead>
                <tbody>
                    {data.map((entry, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                            <td className="px-6 py-4 whitespace-no-wrap">{entry.lugar}</td>
                            <td className="px-6 py-4 whitespace-no-wrap">{entry.hora}</td>
                            <td className="px-6 py-4 whitespace-no-wrap">{entry.operador}</td>
                            <td className="px-6 py-4 whitespace-no-wrap">{entry.direccion}</td>
                            {/* Otros campos de datos */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DataView;
