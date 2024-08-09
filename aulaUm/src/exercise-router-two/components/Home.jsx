import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from './Navbar'; 

export const Home = () => {
  return (
    <>
    <div className='mt-52'>
        <div className="text-center">
          <h1 className="text-4xl font-bold">Bem-vindo à Nossa Loja!</h1>
          <Link to="/products" className="mt-6 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Ver Produtos
          </Link>
        </div>  
      <section className="mt-16 bg-gray-100 p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-center">Sobre Nós</h2>
        <p className="mt-4 text-gray-700 text-center max-w-3xl mx-auto">
          Somos uma empresa dedicada a fornecer produtos de alta qualidade para nossos clientes. Com anos de experiência no mercado,
          nossa missão é trazer o melhor em inovação e satisfação.
        </p>
      </section>
    </div>
    </>
  );
}

