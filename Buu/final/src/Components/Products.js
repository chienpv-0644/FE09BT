import React from "react";
import ItemProducst from "./ItemProducst";
import { connect } from "react-redux";

class Products extends React.Component {
  render() {
    let dataProducts = this.props.products.map((products, index) => {
      return <ItemProducst key={index} index={index} products={products}/>;
    });
  return <div className="col-md-12 d-flex">{dataProducts}</div>;
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};


export default connect(mapStateToProps)(Products);
