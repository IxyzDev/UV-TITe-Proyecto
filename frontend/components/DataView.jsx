"use client";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const DataView = ({ data, ubi }) => {
  const pathName = usePathname();
  const router = useRouter();
  return (
	<>
    {/* <h1>{console.log(data)}</h1> */}

    <div className="bg-white p-8 shadow-lg w-5/6 mx-auto mt-20 overflow-auto">
		<div className="col-span-2 flex justify-between mt-6">
			<button onClick={() => router.push("/")} className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline" type="button">
				Atrás
			</button>
		</div>
		{/*<h2 className="text-2xl mb-4 text-gray-700">Llamadas Registradas</h2>*/}
		<table className="min-w-full divide-y p-8 mt-6 divide-gray-200 text-center">
			<thead>
				<tr>
					<th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Dirección</th>
					<th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
					<th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Nombre contribuyente</th>
					<th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Contacto Contribuyente</th>
					<th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Operador</th>
				<th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Patrullero</th>
					<th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Movil enviado</th>
					<th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Motivo</th>

					{/* Otros encabezados de columna */}
				</tr>
			</thead>
			<tbody>
				{data.map((entry, index) => (
					<tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
						<td className="px-6 py-4 whitespace-no-wrap">{ubi}</td>
						<td className="px-6 py-4 whitespace-no-wrap">{entry.fecha_envio}</td>
						<td className="px-6 py-4 whitespace-no-wrap">{entry.nombre_contribuyente}</td>
						<td className="px-6 py-4 whitespace-no-wrap">{entry.telefono}</td>
					<td className="px-6 py-4 whitespace-no-wrap">{entry.nombre_usuario}</td>
						<td className="px-6 py-4 whitespace-no-wrap">{entry.nombre_patrullero}</td>
						<td className="px-6 py-4 whitespace-no-wrap">{entry.num_movil}</td>
						<td className="px-6 py-4 whitespace-no-wrap">{entry.motivo_detalle}</td>
						{/* Otros campos de datos */}
					</tr>
				))}
			</tbody>
		</table>
    </div>
	</>
  );
};

export default DataView;
