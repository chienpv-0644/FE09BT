import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Search from "./Search";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dishs: [
        { name: "Cút Lộn Xào Me", price: 1000 },
        { name: "Hột Zịt Lộn", price: 1300 },
        { name: "Cơm Sườn", price: 1700 },
        { name: "Cơm Cháy", price: 1500 },
        { name: "Cơm Khét", price: 1100 }
      ],
      nameAdd: "",
      priceAdd: 0,
      name1: "",
      price1: 0,
      textSearch: "",
      arr: []
    };
  }

  changesDishs = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state.nameAdd);
  };

  AddDishs = e => {
    this.setState({
      name1: this.state.nameAdd,
      price1: this.state.priceAdd
    });

    this.state.dishs.push({
      name: this.state.nameAdd,
      price: Number(this.state.priceAdd)
    });
    console.log(this.state.dishs);
    e.preventDefault();
  };

  searchDishs = e => {
    // console.log(e.target.value);
    this.setState({
      textSearch: e.target.value,
      arr: []
    });
  };

  Search = e => {
    this.setState({
      textSearch: e.target.value
    });
    e.preventDefault();
    let namedish = this.state.textSearch;
    for (let i = 0; i < this.state.dishs.length; i++) {
      if (namedish.trim() == this.state.dishs[i].name) {
        this.state.arr.push(this.state.dishs[i]);
      }
    }
    if (this.state.arr.length == 0) {
      alert(`không tìm thấy tên ${this.state.textSearch} trong Dishs`);
    } 
  };

  render() {
    let dataDishs = this.state.dishs.map((item, index) => {
      return (
        <tr key={`dish_${index}`}>
          <td>{item.name}</td>
          <td>{item.price}</td>
        </tr>
      );
    });
    let dataSearch = this.state.arr.map((item, index) => {
      return (
            <tr key={`search_${index}`}>
              <td>{item.name}</td>
              <td>{item.price}</td>
            </tr>
      );
    })

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 mt-5">
            <h4 className="text-center">Menu Dishs</h4>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>{dataDishs}</tbody>
            </table>
          </div>
          <div className="col-md-4 mt-5">
            <h4> Add Dishs</h4>
            <form>
              <div className="form-group">
                <label htmlFor="Name">Name</label>
                <input
                  type="text"
                  // value={this.state.nameAdd}
                  onChange={this.changesDishs}
                  className="form-control"
                  name="nameAdd"
                  placeholder="Enter Name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="Price">Price</label>
                <input
                  type="number"
                  // value={this.state.priceAdd}
                  onChange={this.changesDishs}
                  className="form-control"
                  name="priceAdd"
                  placeholder="Enter Price"
                  required
                />
              </div>
              <button
                type="submit"
                onClick={this.AddDishs}
                className="btn btn-success"
              >
                Add
              </button>
              <button type="reset" className="btn btn-primary ml-3">
                Reset
              </button>
            </form>
          </div>
          <div className="col-md-4 mt-5">
            <h4> Search Name Dishs</h4>
            <form>
              <div className="form-group">
                <label htmlFor="Name">Search</label>
                <input
                  type="text"
                  className="form-control"
                  id="searchName"
                  onChange={this.searchDishs}
                  placeholder="Enter the Name"
                />
              </div>
              <button
                type="submit"
                onClick={this.Search}
                className="btn btn-success"
              >
                Search
              </button>
            </form>
            <div className="row">
              <div className="col-md-12 mt-5">
              <table className="table" >
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {dataSearch}
          </tbody>
        </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
