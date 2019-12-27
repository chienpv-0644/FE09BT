import React from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import AppContent from './components/AppContent';
class App extends React.Component {
  render() {
      return (
      <div className="App">
        <AppHeader/>
        <AppContent/>
      </div>
    );
  }
}

export default App;
