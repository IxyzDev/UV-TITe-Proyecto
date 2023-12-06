"use client";
import { useState} from 'react';
import { useRouter } from 'next/navigation';

const LoginPage = ({setRespuesta}) => {
  const [errorMessage, setErrorMessage] = useState('');

  const [usuario, setUsuario] = useState({
		nombre_usuario: "",
		contrasena: ""
	});

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage('');    

    fetch("http://localhost:80/usuario/login", {
			method: 'POST',
			headers: { "content-type": "application/json" },
			body: JSON.stringify(usuario),
		})
			.then(response => response.json())
			.then(data => { setRespuesta(data); console.log('Respuesta del servidor:', data); })
			.catch(error => { console.error('Error al realizar la solicitud:', error); });
  };
  

  return (
    // Contenedor principal 
    <div className="flex items-center justify-center h-screen bg-white-100">
      <div className="bg-orange-500 p-10 rounded-lg shadow-lg">
      {errorMessage && <div className="text-red-600 text-center mb-4">{errorMessage}</div>}
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div>
            <label htmlFor="username" className="text-white block mb-2">Nombre de usuario:</label>
            <input
              id="username"
              type="text"
              // setUsuario(usuario => ({ ...usuario, "nombre_usuario": e.target.innerText }))
              onChange={(e) => setUsuario(usuario => ({ ...usuario, "nombre_usuario": e.target.value }))}
              className="w-full p-2 rounded-md"
            />
          </div>

          <div>
            <label htmlFor="password" className="text-white block mb-2">Contraseña:</label>
            <input
              id="password"
              type="password"
              onChange={(e) =>  setUsuario(usuario => ({ ...usuario, "contrasena": e.target.value }))}
              className="w-full p-2 rounded-md"
            />
          </div>

          <button
            className="mt-4 bg-white text-orange-500 font-bold rounded-full p-2 border border-transparent hover:border-white transition transform hover:scale-110 focus:outline-none focus:border-white"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;