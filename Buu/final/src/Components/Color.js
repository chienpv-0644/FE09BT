import React from 'react';


class Color extends React.Component {
  render() {
    let space = {
      padding: "4px 12px",
      border: `1px solid ${this.props.Colors}`,
      borderRadius: "50%",
      backgroundColor:`${this.props.Colors}`
    }
    return (
    <span className="mr-1" style={space}></span>
    );
  }
}

export default Color;