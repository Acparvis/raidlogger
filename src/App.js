import React from 'react';
import logo from './logo.svg';
import './App.css';
import ConsumableList from "./components/consumableList/consumableList";
import GoldDataDisplay from "./components/goldDataDisplay/goldDataDisplay";

function App() {
  return (
    <div className="App">
      <ConsumableList/>
      <GoldDataDisplay/>
    </div>
  );
}

export default App;
