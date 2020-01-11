import React from "react";
import Color from "./Color";
class ItemTableColors extends React.Component {
  render() {
    let dataColors = this.props.arrTable.Colors.map((Colors, index) => {
      return <Color key={`color ${index}`} Colors={Colors}/>;
    });
    return <td>{dataColors}</td>;
  }
}

export default ItemTableColors;
