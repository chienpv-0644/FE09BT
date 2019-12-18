import React from 'react';
import logo from './logo.svg';
import './App.css';
import MAIN from './BTVN/MAIN.js'


class App extends React.Component {
  render(){
    return (
      <div>
       <MAIN></MAIN>
      </div>
    )
  }
}
export default App;
//import todoItem from './components/todoItem';

// function App() {
//   return (
    
//      <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h2>hheheh</h2>
//         <todoItem/>
//         <p>
//           Edit <code>src/App.js</code> and save to reload.hahah
//         </p>
        
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }