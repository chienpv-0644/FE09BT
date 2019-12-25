import React from 'react';
import './App.css';
import Data from './Data/Data'
import Cart from './Cart/Cart'

function App() {
  let data=[
    { 
        name:"Bánh mì",
        price: "10000"
      
    },
    { 
      name:"Bánh mì",
      price: "10000"
    
    }
] 
  return (
    
    <div className="App" >
    <Data data={data} />
    <Cart data={data} />
    </div>
  );
}

export default App;
