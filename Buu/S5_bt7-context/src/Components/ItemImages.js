import React from "react";

class ItemImages extends React.Component {
  render() {
    let size = {
      width: "250px"
    };

    return (
      <div className="col-md-4 mt-2">
        <img src={this.props.arr.image} alt="..." style={size} />
      </div>
    );
  }
}
export default ItemImages;
