import React from "react";
import ItemPizza from "./ItemPizza";
import { connect } from "react-redux";
import { increaseDish, reductionDish, resetDish } from "../actions/action";

class OrderPizza extends React.Component {
  render() {
    let dataDish = this.props.pizza.pizza.map((pizza, index) => {
      return (
        <ItemPizza
          key={index}
          pizza={pizza}
          handlerIncreaseDish={this.props.handlerIncreaseDish}
          handlerReductionDish={this.props.handlerReductionDish}
        />
      );
    });
    let stylePrice = {
        border: "1px solid #ffff02",
        borderRadius: "50%",
        backgroundColor: "#ffff02"
    }
    let color = {
      fontWeight: "bold",
      textAlign: "right"
    };
    return (
      <div className="col-md-4">
        <div className="row">
          <div className="col-md-4">
            <p>Your pizza </p>
          </div>
          <div className="col-md-3 text-center">
            <p style={stylePrice}> {this.props.pizza.total}$</p>
          </div>
          <div className="col-md-5 text-right">
            <button
              className="btn btn-warning mb-2"
              onClick={()=>this.props.handlerResetDish(this.props.pizza.total)}
            >
              Reset Pizza
            </button>
          </div>
        </div>
        {dataDish}
        <div className="card">
          <div className="card-body">
            <div className="card-text">
              <div className="row">
                <div className="col-md-8"> Total</div>
                <div className="col-md-4" style={color}>
                  {this.props.pizza.total}$
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="card-text">
              <div className="row">
                <div className="col-md-12">
                  <button className="btn btn-info"> Checkout</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handlerIncreaseDish: id => {
      dispatch(increaseDish(id));
    },
    handlerReductionDish: id => {
      dispatch(reductionDish(id));
    },
    handlerResetDish: (id) => {
      dispatch(resetDish(id));
    }
  };
};

export default connect(null, mapDispatchToProps)(OrderPizza);
