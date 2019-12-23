import React from "react";

class MainHeader extends React.Component {
  render() {
    let header = {
      marginTop: "30px",
      textTransform: "uppercase",
      marginBottom: "10px"
    };
    return (
      <div style={header}>
        <h3>{this.props.header}</h3>
      </div>
    );
  }
}

export default MainHeader;
