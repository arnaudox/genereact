import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import RootPage from './pages/RootPage';
import ButtonPage from './pages/ButtonPage';
import './App.css';

const App = () => (
  <div className="App">
    <div className="App__container">
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/button"
            component={ButtonPage}
          />

          <Route
            path="/"
            component={RootPage}
          />
        </Switch>
      </BrowserRouter>
    </div>
  </div>
);

export default App;
