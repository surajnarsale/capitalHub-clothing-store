import React from 'react';
import { GlobalStyles } from './styles/global-styles';
import { Product } from './components';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Product />
      <h1>Capital-Hub</h1>
    </>
  );
};

export default App;
