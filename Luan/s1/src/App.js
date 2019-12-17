import React from 'react';
import './App.css';
import MainContent from './Components/MainContent';
import SideRight from './Components/SideRight';

function App() {
  return (
    <>
    <div className="container-fluid">
      <div className="row texct-center">
        <div className="col-md-8">
          <MainContent/>
          
        </div>
        <div className="col-md-4">
          <SideRight/>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
