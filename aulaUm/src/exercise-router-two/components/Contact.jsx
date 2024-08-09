import React from 'react';

export const Contact = () => {
  return (
    <>
    <div className="p-8 max-w-lg mx-auto mt-10">
      <h1 className="text-3xl font-bold text-center">Contato</h1>
      <p className="mt-4 text-gray-700 text-center">
        Tem alguma dúvida ou quer saber mais sobre nossos produtos? Entre em contato conosco usando o formulário abaixo.
      </p>
      <form className="mt-8 space-y-4">
        <div>
          <label className="block text-gray-700">Nome</label>
          <input type="text" className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label className="block text-gray-700">Email</label>
          <input type="email" className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label className="block text-gray-700">Mensagem</label>
          <textarea className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" rows="5"></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
          Enviar
        </button>
      </form>
    </div>
    </>
  );
}
