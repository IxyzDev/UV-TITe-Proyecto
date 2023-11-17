"use client";
import { useState} from 'react';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();   

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage('');    
    // Aquí agregarías la lógica para autenticar al usuario con el backend

    // Aquí agregarías la lógica para verificar el nombre de usuario y la contraseña
    const isAuthSuccessful = true; // Resultado ficticio de la autenticación

    if (!isAuthSuccessful) {
        // Si la autenticación falla, muestra un mensaje de error
        setErrorMessage('Usuario o contraseña incorrecta.');
        return; // Salir de la función si hay un error
      }

          // Si la autenticación es exitosa, redirige al usuario
    router.push('/'); // Asumiendo que '/dashboard' es la ruta a la que quieres redirigir tras un inicio de sesión exitoso
};
  

  return (
    // Contenedor principal que centra el recuadro naranja
    <div className="flex items-center justify-center h-screen bg-white-100">
      <div className="bg-orange-500 p-10 rounded-lg shadow-lg">
      {errorMessage && <div className="text-red-600 text-center mb-4">{errorMessage}</div>} {/* Mostrar mensaje de error aquí */}
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div>
            <label htmlFor="username" className="text-white block mb-2">Nombre de usuario:</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 rounded-md"
            />
          </div>

          <div>
            <label htmlFor="password" className="text-white block mb-2">Contraseña:</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
  );}


export default LoginPage;