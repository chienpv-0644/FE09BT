import React from "react";
import { connect } from "react-redux";
import { plusProduct } from "../action/orderProduct";
import { subtractProduct } from "../action/orderProduct";

class ItemProduce extends React.Component {
  constructor() {
    super();
    this.state = {
      number: 0,
      isChange: false
    };
    this.numberRef = React.createRef();
  }

  static getDerivedStateFromProps = (nextProps, prevState) => {
    console.log(prevState.number !== nextProps.product.number);
    console.log(prevState.number);
    console.log(nextProps.product.number);
    if (prevState.number !== nextProps.product.number) {
      return {
        number: nextProps.product.number,
        isChange: true
      };
    }

    return null;
  };

  setNumber = () => {
    console.log(this.state.isChange);
    if (this.state.isChange) {
      if (this.state.isChange === true)
        this.numberRef.current.value = this.state.number;
    }
  };

  render() {
    console.log("-> render iteam ", this.props.product);
    let { id, name, price, number } = this.props.product;
    return (
      <div className="border">
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <p>{name}</p>
              <p>{price}</p>
            </div>
            <div className="col-md-6 text-right">
              <button
                onClick={() => this.props.handlerPlusPrduct(id)}
                type="button"
                className="btn btn-primary"
              >
                +
              </button>
              <input
                ref={this.numberRef}
                type="number"
                className="w-25 btn border border-dark mx-2"
                defaultValue={this.setNumber() || 0}
              />
              <button
                onClick={() => this.props.handlerSubtractPrduct(id)}
                type="button"
                className="btn btn-danger"
              >
                -
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handlerPlusPrduct: id => dispatch(plusProduct(id)),
    handlerSubtractPrduct: id => dispatch(subtractProduct(id))
  };
};

export default connect(null, mapDispatchToProps)(ItemProduce);
