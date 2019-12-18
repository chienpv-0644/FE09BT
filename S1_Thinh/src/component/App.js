import React from 'react';
import './App.css';
import myData from '../data.json';
import Maincontent from './maincontent/Main.content'
import SideBar from './sideBar/SideBar'
function App() {
  let datas=JSON.stringify(myData);
  datas=JSON.parse(datas)
  return (
    <div className="App">
     <Maincontent className="Maincontent">{datas}
       </Maincontent>
     <SideBar className="SideBar" datas/>
    </div>
  );
}

export default App;
