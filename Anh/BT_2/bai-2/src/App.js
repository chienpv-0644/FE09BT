import React from 'react';
import logo from './logo.svg';
import './App.css';
import CardProduct from './CardProduct'
import AddProduce from './addProduce'

function App() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12">
          <AddProduce />
        </div>
      </div>
    </div>
  );
}

export default App;
