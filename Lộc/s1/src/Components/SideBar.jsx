import React, { Component } from "react";
import FormRegister from "./FormRegister";
import NewFeed from "./NewFeed";
class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <br />
            <FormRegister />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <br />
            <NewFeed  
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SideBar;
