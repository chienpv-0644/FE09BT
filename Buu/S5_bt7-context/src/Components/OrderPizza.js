import React from "react";
import ItemPizza from "./ItemPizza";
import PizzaContext from "../Context";

class OrderPizza extends React.Component {
  render() {
    let dataDish = this.props.pizza.map((pizza, index) => {
      return <ItemPizza key={index} pizza={pizza} />;
    });

    let stylePrice = {
      border: "1px solid #ffff02",
      borderRadius: "50%",
      backgroundColor: "#ffff02"
    };
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
            <p style={stylePrice}> {this.props.total}$</p>
          </div>
          <div className="col-md-5 text-right">
            <button
              className="btn btn-warning mb-2"
              onClick={() => this.context.handlerResetPizza()}
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
                  {this.props.total}$
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

OrderPizza.contextType = PizzaContext;
export default OrderPizza;
