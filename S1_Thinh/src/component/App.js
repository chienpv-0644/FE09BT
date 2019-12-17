import React from 'react';
import './App.css';
import '../../public/data.json';
import Maincontent from './maincontent/Main.content'
import SideBar from './sideBar/SideBar'
function App() {
  
  return (
    <div className="App">
     <Maincontent/>
     <SideBar/>
    </div>
  );
}

export default App;
