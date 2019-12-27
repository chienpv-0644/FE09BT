import React from 'react';
import SideBar from './component/Sidebar/sidebar'
import MainContent from './component/Main Content/mainContent'

import './App.css'

function App() {
  return (
      <div className="app">
          <div className="wrap">
              <div className="row">
                  <MainContent/>
                  <SideBar/>
              </div>
          </div>
      </div>
  );
}

export default App;
