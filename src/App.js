import React from 'react';
import './App.css';
import ShopingList from './components/ShopingList'
import Counter from './components/Counter'
import Login from './components/Login'

function App() {
  return (
    <div>
      <h2>UseReducer Hook :</h2>
      <div style={{border:"solid red 1px"}}>
        <h2>Basic Example:</h2>
        <Counter/>
      </div>
      <div style={{border:"solid red 1px"}}>
        <h2>Little more then a basic:</h2>
       <ShopingList/>
      </div>
      <div style={{border:"solid red 1px"}}>
        <h2>Complex:</h2>
       <Login/>
      </div>
    </div>
  );
}

export default App;
