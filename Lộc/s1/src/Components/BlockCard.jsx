import React, { Component } from "react";
import CardImage from "./CardImage";
import CardContent from "./CardContent";
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
            <div className="col-md-8">
              <CardImage {...this.props} />
            </div>
            <div className="col-md-4">
              <CardContent {...this.props} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default BlockCard;
