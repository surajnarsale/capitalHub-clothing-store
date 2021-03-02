import React from 'react';
import { Products } from '../containers';
import { Navbar } from '../components';

export default function Home({ products, onAddToCart, totalItems }) {
  return (
    <>
      <Navbar totalItems={totalItems} />
      <Products products={products} onAddToCart={onAddToCart} />
    </>
  );
}
