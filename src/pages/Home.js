import React from 'react';
import { Products } from '../containers';
import { Navbar } from '../components';

export default function Home({ products }) {
  return (
    <>
      <Navbar />
      <Products products={products} />
    </>
  );
}
