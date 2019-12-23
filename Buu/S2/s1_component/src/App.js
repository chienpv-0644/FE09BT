import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MainContent from "./MainContent";
import SideBar from "./SideBar";

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <MainContent></MainContent>
            </div>
            <div className="col-md-4">
              <SideBar></SideBar>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
