import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Content from "./components/content";
import ProductContext from "./context";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      listProduct: [
        {
          id: 1,
          name: "Hoc HTML",
          price: 2000,
          number: 0
        },
        {
          id: 2,
          name: "Hoc CSS",
          price: 2000,
          number: 0
        },
        {
          id: 3,
          name: "Hoc JS",
          price: 2000,
          number: 0
        },
        {
          id: 4,
          name: "Hoc React",
          price: 2000,
          number: 0
        }
      ]
    };
  }
  render() {
    return (
      <ProductContext.Provider
        value={{
          listProduct: this.state.listProduct,
          handlerPlusPrduct: id => {
            let arr = this.state.listProduct;
            let indexPlus = this.state.listProduct.findIndex(
              item => item.id === id
            );
            arr[indexPlus].number++;
            this.setState({
              listProduct: [...arr]
            });
          },
          handlerSubtractPrduct: id => {
            let arr = this.state.listProduct;
            let indexPlus = this.state.listProduct.findIndex(
              item => item.id === id
            );
            if (arr[indexPlus].number > 0) arr[indexPlus].number--;
            this.setState({
              listProduct: [...arr]
            });
          }
        }}
      >
        <div>
          <Content />
        </div>
      </ProductContext.Provider>
    );
  }
}

export default App;
