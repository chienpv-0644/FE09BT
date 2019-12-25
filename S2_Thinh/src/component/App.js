import React from 'react';
import './App.css';
import Data from './Data/Data'

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
    </div>
  );
}

export default App;
