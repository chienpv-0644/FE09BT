import React from "react";
import ColorRound from "./colorRound";

class ItemShowProductCompare extends React.Component {
  render() {
    let {
      id,
      name,
      price,
      Colors,
      Condition,
      title,
      image,
      compare
    } = this.props.product;
    let arrayColor;
    if (Colors[0] !== "Colors") {
      arrayColor = Colors.map(item => <ColorRound color={item} />);
    } else {
      arrayColor = "Colors";
    }
    return (
      <div className="col mx-0 p-0 text-center ">
        <div className=" py-5 border-top border-bottom border-top-0  border-right-0">
          {name}
        </div>
        <div
          className={" py-5 border-top border-bottom " + this.props.addClass}
        >
          {typeof price === "number" ? "$" + price : price}
        </div>
        <div
          className={" py-5 border-top border-bottom " + this.props.addClass}
        >
          {arrayColor}
        </div>
        <div
          className={" py-5 border-top border-bottom " + this.props.addClass}
        >
          {Condition}
        </div>
      </div>
    );
  }
}

export default ItemShowProductCompare;
