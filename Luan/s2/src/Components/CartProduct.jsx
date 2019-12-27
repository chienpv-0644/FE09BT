import React, { Component } from "react";
class CartProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="col-md-4 mb-5">
          <div className="card" style={{ width: "18rem" }}>
            <img
              style={{ width: "100%", height: 150 }}
              src={this.props.image}
              className="card-img-top"
              alt="..."
            />
            <br />
            <div className="card-body text-center">
              <h5 className="card-title">{this.props.name}</h5>
              <p className="card-text">
                <span className="badge badge-danger">{this.props.price}</span>
              </p>
              <button onClick={this.props.removeProduct} name={this.props.keyData} value={this.props.name} className="btn btn-primary">
                {this.props.check ? "Hủy" : ""}
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CartProduct;
