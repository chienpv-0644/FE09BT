import React from 'react';
import App_Header from './App_header';
import Content from './Content';


class Todo_App extends React.Component {
  render() {
    return (
      <div>
        <App_Header/>
        <Content/>
      </div>
    );
  }
}

export default Todo_App;