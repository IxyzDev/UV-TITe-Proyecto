import React from 'react';
import EntryForm from '../components/EntryForm';

const Home: React.FC = () => {
    return (
      <div className="bg-gray-200 min-h-screen flex flex-col items-center">
        {/* Topbar */}
        <div className="bg-orange-500 py-4 w-full">
          <h1 className="text-4xl text-white text-center">Sistema de Registro - Seguridad Ciudadana Viña del Mar</h1>
        </div>
        
        <EntryForm />
      </div>
    );
  }
  
  export default Home;
