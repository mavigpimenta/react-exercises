import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <>
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/home" className="text-white font-bold text-xl">
          Logo
        </Link>
        <div className="space-x-4">
          <Link to="/home" className="text-white">
            Home
          </Link>
          <Link to="/products" className="text-white">
            Products
          </Link>
          <Link to="/contact" className="text-white">
            Contact
          </Link>
          <Link to="/about" className="text-white">
            About
          </Link>
        </div>
      </div>
    </nav>
    </>
  );
}

