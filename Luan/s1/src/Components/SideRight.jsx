import React, { Component } from "react";
import FormRegister from "./FormRegister";
import NewFeed from "./NewFeed";
class SideRight extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <FormRegister/>
            </div>
          </div>
          <br />
          <br/>
          <div className="row">
            <div className="col-md-12">
                <NewFeed />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SideRight;
