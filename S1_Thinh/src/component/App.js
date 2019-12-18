import React from 'react';
import './App.css';
import Maincontent from './maincontent/Main.content'
import SideBar from './sideBar/SideBar'
function App() {
  
  return (
    <div className="App">
     <Maincontent className="Maincontent"/>
     <SideBar className="SideBar"/>
    </div>
  );
}

export default App;
