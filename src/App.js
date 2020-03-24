import React from 'react';
import './App.css';

import { Route } from 'react-router-dom';


import Homepage from './pages/homepage/homepage.component';

import ShopPage from './pages/shop/shop.component';

const HatsPage = () => (
  <div>
  <h1>This is hats page</h1>
  </div>
)

function App() {
  return (
    <div>
    <Route exact path='/' component={Homepage} />
    <Route exact path='/shop' component={ShopPage} />
    </div>
  );
}

export default App;
