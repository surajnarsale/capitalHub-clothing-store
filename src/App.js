import React, { useState, useEffect } from 'react';
import { GlobalStyles } from './styles/global-styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import { commerce } from './lib/commerce';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(products);
  console.log(cart);
  return (
    <>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route to="/">
            <Home
              products={products}
              onAddToCart={handleAddToCart}
              totalItems={cart.total_items}
            />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
