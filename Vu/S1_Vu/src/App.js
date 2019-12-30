import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main_content from './components/main_content/main_content';
import Sidebar from './components/sidebar/sidebar';


class App extends React.Component {
    render() {
        var styleApp = {
          width: '95%',
          display: 'flex',
          margin: ' auto',
          backgroundColor: '#E3DFE9'
        };
        return (
            <div style={styleApp}>
                <Main_content></Main_content>
                <Sidebar></Sidebar>
            </div>
        )
    }
}

export default App;