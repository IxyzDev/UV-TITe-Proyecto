"use client";

import { usePathname, useRouter } from "next/navigation";

import { Stack } from "@mui/material";

const Menu = () => {
	const pathName = usePathname();
	const router = useRouter();

	return (
		<div className="bg-gray-200 min-h-screen flex flex-col items-center justify-center">
		   <div className="flex flex-col md:flex-row md:gap-8 space-y-4 md:space-y-0">
			<button
			  onClick={() => router.push("/create-registro")}
			  className="bg-orange-500 text-white text-2xl font-bold py-4 px-10 rounded-full shadow-lg transition duration-300 ease-in-out hover:bg-orange-600 hover:-translate-y-1 hover:scale-110"
			>
			  Crear Nuevo Registro
			</button>
			<button
			  onClick={() => router.push("/view-registros")}
			  className="bg-orange-500 text-white text-2xl font-bold py-4 px-10 rounded-full shadow-lg transition duration-300 ease-in-out hover:bg-orange-600 hover:-translate-y-1 hover:scale-110"
			>
			  Ver Listado de Registros
			</button>
		  </div>
		</div>
	  );
	};
	
	export default Menu;