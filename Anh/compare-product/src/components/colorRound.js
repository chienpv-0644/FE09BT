import React from "react";

class ColorRound extends React.Component {
  render() {
    return (
      <div
        className="rounded-circle colorRound mx-1"
        style={{ backgroundColor: this.props.color }}
      ></div>
    );
  }
}

export default ColorRound;
