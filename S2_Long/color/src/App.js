import React from 'react';
import './App.css'
import Color from './Components/Color'
function App() {
  const color = [
    {
      code: '#000',
      title: 'black'
    },
    {
      code: '#f00',
      title: 'red'
    },
    {
      code: '#0f0',
      title: 'green'
    },
    {
      code: '#00f',
      title: 'blue'
    }
  ]
  return (
    <div className='App'>
      {color.map((item,index) => {
        return <Color key={index} color={item}/>
      })}
    </div>
  );
}

export default App;
