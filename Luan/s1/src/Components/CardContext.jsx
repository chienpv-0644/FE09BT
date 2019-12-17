import React, { Component } from "react";
class CardContext extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props);
    return (
      <>
        <div>
          <h5>{this.props.name}</h5>
          <p>
            <b>{this.props.comment}</b>
          </p>
          <button className="btn btn-dark">READ MORE</button>
        </div>
      </>
    );
  }
}

export default CardContext;
