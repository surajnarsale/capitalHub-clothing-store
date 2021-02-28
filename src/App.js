import React, { useState, useEffect } from 'react';
import { GlobalStyles } from './styles/global-styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import { commerce } from './lib/commerce';

const App = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);
  return (
    <>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route to="/">
            <Home products={products} />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
