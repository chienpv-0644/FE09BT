import React, { Component } from "react";
class CardContent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>

          <div>
              <h5>{this.props.title}</h5>
              <p>{this.props.comment}</p>
              <button className="btn btn-warning">READ MORE</button>
            </div>
      </>
    );
  }
}

export default CardContent;
