import React from 'react';

export const ProductCard = ({ product }) => {
  return (
    <>
    <div className="border rounded-lg p-4 hover:shadow-lg">
      <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover mb-4" />
      <h3 className="text-lg font-bold">{product.name}</h3>
      <p className="text-gray-700">{product.price}</p>
    </div>
    </>
  );
}