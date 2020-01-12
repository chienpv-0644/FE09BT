import React from 'react';
import './App.css';
import ShowImage from './component/showImage'
import Choose from './component/choose'
function App() {
  return (
    <div className="container my-5">
      <div className="row no-gutters">
          <ShowImage/>
          <Choose/>
      </div>
    </div>
  );
}

export default App;
