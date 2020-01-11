import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { id: 0, name: "IPhone 11 Pro Max 256GB", price: 1449, amount: 10 },
        { id: 1, name: "Airpods Pro", price: 249, amount: 7 },
        { id: 2, name: "Apple Watch Series 5", price: 399, amount: 5 },
        { id: 3, name: "IPad Pro 10,5 inch", price: 649, amount: 3 },
        { id: 4, name: "MacBook Pro 16 inch", price: 6100, amount: 2 }
      ],
      addProducts: [],
      bol: true,
      count: 1,
      getID: -1,
      num: 0,
    };
  }
  addCart = e => {
    let key = e.target.id;
    this.setState(prevState => ({
      products: prevState.products.map(obj =>
        obj.id == key
          ? Object.assign(obj, { amount: this.state.products[key].amount - 1 })
          : obj
      ),
      count: this.state.products[key].amount,
      getID: key
    }));
    if (this.state.bol) {
      this.setState({
        bol: false
      });
      this.state.addProducts = [{...this.state.products[e.target.id]}];
      //this.state.addProducts.push(this.state.products[e.target.id]);
      
    } else {
      let nameID = this.state.products[e.target.id].name;
      let x = 0;
      for (let i = 0; i < this.state.addProducts.length; i++) {
        if (nameID === this.state.addProducts[i].name) {
          x += 1;
        }
      }
      if (x == 0) {
        this.state.addProducts = [...this.state.addProducts,{...this.state.products[e.target.id]}];
        
      }
    }
      
    this.setState(prevState => ({
      num: this.state.addProducts[key].amount,
      addProducts: prevState.addProducts.map(obj =>
        obj.id == key
          ? Object.assign(obj, { amount: (this.state.addProducts[key].amount + 1) % this.state.num })
          : obj
      ),
    }));
  };
  render() {
    const { count, getID } = this.state;
    const x = count == 0;
    const y = getID;

    console.log(x);
    let dataProducts = this.state.products.map((item, index) => {
      return (
        <div key={`adds${index}`}>
          <p>
            {item.name} - ${item.price} x {item.amount}
          </p>
          <button
            id={index}
            className="btn btn-danger btn-sm mb-3"
            disabled={x && index == y}
            onClick={this.addCart}
          >
            {" "}
            Add to cart
          </button>
        </div>
      );
    });
    let dataAdds = this.state.addProducts.map((item, index) => {
      return (
        <div key={`product${index}`}>
          <p>
            {item.name} - ${item.price} x {item.amount}
          </p>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <h4 className="font-weight-bold">Shopping Cart Example</h4>
            <hr />
            <h5 className="font-weight-bold">Products</h5>
            {dataProducts}
            <hr />
            <h5 className="font-weight-bold">Your Cart</h5>
            {dataAdds}
            <p className="total">Total: </p>
            <button className="btn btn-info btn-sm"> Checkout</button>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    );
  }
}
export default App;
