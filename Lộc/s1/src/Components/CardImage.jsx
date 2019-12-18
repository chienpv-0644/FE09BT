import React, { Component } from "react";
class CardImage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <img
          style={{ width: 450, height: 250 }}
          src={this.props.image}
          alt="fail"
        />
      </>
    );
  }
}

export default CardImage;
