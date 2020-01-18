import React from 'react';
import logo from './logo.svg';
import './App.css';
import ConsumableList from "./components/consumableList/consumableList";
import GoldDataDisplay from "./components/goldDataDisplay/goldDataDisplay";
import ShoppingList from "./components/shoppingList/shoppingList";
import TemplateSelector from "./components/templateSelector/templateSelector";

function App() {
  return (
    <div className="App">
        <h1 className="text-6xl">RaidLogger v0.1</h1>
        <TemplateSelector/>
      <ConsumableList/>
      <GoldDataDisplay/>
      <ShoppingList/>
    </div>
  );
}

export default App;
