import React, { Component } from "react";
class CardNewFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="row" style={{ background: "#6f6d7d8a" ,borderBottom: "5px solid red" }} >
        <div className="col-md-4">
            <br/>
          <img
            style={{ width: 90, height: 80 }}
            src={this.props.img}
            alt="fail"
          />
        </div>
        <div className="col-md-8">
            <br/>
          <h5>{this.props.name}</h5>
          <p>{this.props.comment}</p>
        </div>
      </div>
    );
  }
}

export default CardNewFeed;
