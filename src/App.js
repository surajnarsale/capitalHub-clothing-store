import React from 'react';
import { GlobalStyles } from './styles/global-styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route to="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
