import React from "react";
import ListShowProducts from "./listShowProducts";
import ListShowProductCompare from "./listShowProductCompare";

class CompareProduct extends React.Component {
  render() {
    return (
      <div className="container">
        <ListShowProducts />
        <ListShowProductCompare />
      </div>
    );
  }
}

export default CompareProduct;
