"use client";

import { usePathname, useRouter } from "next/navigation";

import { Stack } from "@mui/material";

const Menu = () => {
  const pathName = usePathname();
  const router = useRouter();

  return (
    <div className="bg-gray-200 min-h-screen flex flex-col items-center">
      {/* Topbar */}
      <div>
        <h1>Registro de Eventualidades</h1>
      </div>

      {/* Contenido */}
      <div className="flex flex-col items-center justify-center flex-grow">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 8 }}
        >
          <div
            className="bg-orange-500 w-4/5 md:w-96 md:h-64 hover:bg-orange-600 text-white text-2xl font-bold py-4 px-8 rounded-3xl focus:outline-none focus:shadow-outline mb-6 md:mb-0 mx-6 md:mx-0"
            onClick={() => router.push("/create-registro")}
          >
            <h1>Crear Nuevo Registro</h1>
          </div>

          <div
            className="bg-orange-500 w-4/5 md:w-96 md:h-64 hover:bg-orange-600 text-white text-2xl font-bold py-4 px-8 rounded-3xl focus:outline-none focus:shadow-outline mb-6 md:mb-0 mx-6 md:mx-0"
            onClick={() => router.push("/view-registro")}
          >
            <h1>Ver Listado de Registros</h1>
          </div>
        </Stack>
      </div>
    </div>
  );
};

export default Menu;
