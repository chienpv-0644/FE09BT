import React from "react";

class CardImages extends React.Component {
  render() {
    let space = {
      padding: "20px"
    };
    return (
      <div style={space}>
        <img src={this.props.images} className="card-img" alt="..."></img>
      </div>
    );
  }
}

export default CardImages;
