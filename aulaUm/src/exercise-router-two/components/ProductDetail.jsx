import React from 'react';
import { useParams } from 'react-router-dom';

const products = [
  { id: 1, name: 'Produto 1', price: 'R$100,00', imageUrl: 'https://i.pinimg.com/564x/be/ea/60/beea600bc888449c0a03f56368def184.jpg'  },
  { id: 2, name: 'Produto 2', price: 'R$200,00', imageUrl: 'https://i.pinimg.com/736x/f0/ef/7c/f0ef7c4a8859cfcc7a12c780f34b325b.jpg' },
  { id: 3, name: 'Produto 3', price: 'R$300,00', imageUrl: 'https://i.pinimg.com/736x/92/78/a4/9278a454a9d0053d1811a5f32696e015.jpg' },
];

export const ProductDetail = () => {
  const { productId } = useParams();
  const product = products.find(p => p.id === parseInt(productId));

  if (!product) {
    return <p>Produto não encontrado!</p>;
  }

  return (
    <>
    <div className="border rounded-lg p-4">
      <img src={product.imageUrl} alt={product.name} className="w-full h-64 object-cover mb-4" />
      <h2 className="text-2xl font-bold">{product.name}</h2>
      <p className="text-xl text-gray-700">{product.price}</p>
    </div>
    </>
  );
}

