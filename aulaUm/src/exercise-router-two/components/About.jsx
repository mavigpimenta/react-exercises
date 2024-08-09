import React from 'react';

export const About = () => {
  return (
    <>
    <div className="p-8 mt-20">
      <h1 className="text-3xl font-bold text-center">Sobre Nós</h1>
      <p className="mt-4 text-gray-700 max-w-3xl mx-auto text-center">
        Nossa empresa foi fundada com o propósito de oferecer produtos de alta qualidade para o mercado. Com uma equipe dedicada e
        apaixonada, estamos sempre em busca de inovação e excelência em tudo que fazemos.
      </p>
      <div  className="mt-12">
        <h2 className="text-2xl font-bold text-center">Nossa História</h2>
        <p className="mt-4 text-gray-700 max-w-3xl mx-auto text-center">
          Desde nossa fundação em 2024, temos nos esforçado para construir uma reputação baseada em confiança e qualidade. Começamos
          como uma pequena loja, e hoje somos reconhecidos como um dos principais fornecedores do mercado.
        </p>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-center">Nossos Valores</h2>
        <ul className="mt-4 text-gray-700 max-w-3xl mx-auto list-disc list-inside">
          <li>Integridade</li>
          <li>Compromisso com a Qualidade</li>
          <li>Inovação</li>
          <li>Satisfação do Cliente</li>
        </ul>
      </div>
    </div>
    </>
  );
}
