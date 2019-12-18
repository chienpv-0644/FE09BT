import React from 'react';
import './App.css';
import MainContent from './Components/MainContent';
import SideBar from './Components/SideBar';

function App() {
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <MainContent/>
        </div>
        <div className="col-md-4">
          <SideBar/>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
