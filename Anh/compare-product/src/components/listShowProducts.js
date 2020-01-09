import React from "react";
import ItemProduct from "./itemProduct";
import { connect } from "react-redux";

class ListShowProducts extends React.Component {
  render() {
    console.log(this.props.dataProduce);
    return (
      <div className="row my-4">
        <h1 className="col-12 my-3">Product</h1>

        {this.props.dataProduce.map((iteam, index) => (
          <ItemProduct key={index + "ItemProduct"} product={iteam} />
        ))}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    dataProduce: state.productList
  };
};

export default connect(mapStateToProps)(ListShowProducts);
