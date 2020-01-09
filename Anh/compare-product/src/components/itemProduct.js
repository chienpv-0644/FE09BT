import React from "react";
import OpacityProduce from "./opacityProduce";

class ItemProduct extends React.Component {
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
    return (
      <div className="col-md-3">
        <div className={"card product-card" + (compare ? " compare" : "")}>
          <div>
            <div className="position-relative text-center">
              <OpacityProduce id={id} compare={compare} />
              <img className="card-img-top" src={image} alt={name} />
            </div>
          </div>

          <div className="card-body">
            <h6 className="card-title d-flex justify-content-between">
              <p>{name}</p>
              <p>${price}</p>
            </h6>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemProduct;
