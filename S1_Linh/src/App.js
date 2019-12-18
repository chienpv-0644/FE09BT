import React from 'react';
import SideBar from './component/Sidebar/sidebar'
import MainContent from './component/Main Content/mainContent'

import './App.css'

function App() {
  return (
      <div className="app">
          <MainContent/>
          <SideBar/>
      </div>
  );
}

export default App;
