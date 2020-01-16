import React from 'react';
import logo from './logo.svg';
import './App.css';
import ConsumableList from "./components/consumableList/consumableList";
import GoldDataDisplay from "./components/goldDataDisplay/goldDataDisplay";
import ShoppingList from "./components/shoppingList/shoppingList";

function App() {
  return (
    <div className="App">
      <ConsumableList/>
      <GoldDataDisplay/>
      <ShoppingList/>
    </div>
  );
}

export default App;
