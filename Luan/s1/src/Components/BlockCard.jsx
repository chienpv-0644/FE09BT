import React, { Component } from "react";
import CardImage from "./CardImage";
import CardContext from "./CardContext";
class BlockCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
      console.log(this.props);
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <CardImage {...this.props}/>
            </div>
            <div className="col-md-5">
              <CardContext {...this.props} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default BlockCard;
