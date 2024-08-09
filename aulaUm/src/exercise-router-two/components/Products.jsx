import React from 'react';
import { Link } from 'react-router-dom';
import { ProductCard } from './ProductCard';

const products = [
  { id: 1, name: 'Produto 1', price: 'R$100,00', imageUrl: 'https://i.pinimg.com/564x/be/ea/60/beea600bc888449c0a03f56368def184.jpg' },
  { id: 2, name: 'Produto 2', price: 'R$200,00', imageUrl: 'https://i.pinimg.com/736x/f0/ef/7c/f0ef7c4a8859cfcc7a12c780f34b325b.jpg' },
  { id: 3, name: 'Produto 3', price: 'R$300,00', imageUrl: 'https://i.pinimg.com/736x/92/78/a4/9278a454a9d0053d1811a5f32696e015.jpg' },
];

export const Products = () => {
  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-56">
      {products.map(product => (
        <Link to={`/products/${product.id}`} key={product.id}>
          <ProductCard product={product} />
        </Link>
      ))}
    </div>
    </>
  );
}
