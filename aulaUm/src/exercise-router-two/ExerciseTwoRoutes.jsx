import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';

export const ExerciseTwoRoutes = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar />
      </header>
      <main className="flex-grow container mx-auto p-4">
        <Outlet />
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2024 Nossa Loja. Todos os direitos reservados.</p>
        <p>
            <div className='flex items-center w-full justify-center gap-2'>
                <a href="" className="text-blue-400 hover:text-blue-600">
                    Termos de Uso
                </a>  
                <a href="" className="text-blue-400 hover:text-blue-600">
                    Política de Privacidade
                </a>
            </div>
        </p>
      </footer>
    </div>
  );
}

