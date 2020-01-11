import React from "react";
import ShowImages from "./ShowImages";
import OrderPizza from "./OrderPizza";
import PizzaContext from "../Context";

class Pizza extends React.Component {
  render() {
    console.log(this.context);

    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8 text-center">
            <ShowImages {...this.context} />
          </div>
          <OrderPizza {...this.context} />
        </div>
      </div>
    );
  }
}

Pizza.contextType = PizzaContext;
export default Pizza;
