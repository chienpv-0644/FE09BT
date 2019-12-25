import React, { Component } from "react";
import "./App.css";
import Product from "./Components/Product";
import CartProduct from "./Components/CartProduct";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [
        {
          image:
            "https://gaongon24h.com/wp-content/uploads/2018/01/cach-lam-xoi-ga.jpg",
          name: "Xôi gà",
          price: "20.000 VND",
          status: true
        },
        {
          image:
            "https://www.vietnammm.com/blog/wp-content/uploads/2017/09/banh-mi_vietnammm_F.jpg",
          name: "Bánh mì",
          price: "10.000 VND",
          status: true
        },
        {
          image:
            "https://media.cooky.vn/recipe/g4/34540/s800x500/cooky-recipe-636670824205383845.JPG",
          name: "Cơm cuộn",
          price: "50.000 VND",
          status: true
        },
        {
          image:
            "https://vcdn-dulich.vnecdn.net/2016/01/19/BunboHue-3287-1453173334.jpg",
          name: "Bún bò",
          price: "25.000 VND",
          status: true
        },
        {
          image:
            "https://www.dvpmarket.com/resources/uploads/images/2018/07/Mi-Quang-tom-thit-dam-da-hap-dan.jpg",
          name: "Mỳ quảng",
          price: "30.000 VND",
          status: true
        },
        {
          image:
            "https://daotaobeptruong.vn/wp-content/uploads/2019/09/banh-canh-ca-loc-hue.jpg",
          name: "Bánh canh",
          price: "25.000 VND",
          status: true
        }
      ],
      card : [],
      con : []
    };
  }
  Addproduct = (e) => {
    var name = this.refs.name.value;
    var price = this.refs.price.value;
    var image = this.refs.image.value;
    var status = true;
    var obj = { name, price, image, status };
    this.setState({
      value: [...this.state.value, obj]
    });
    console.log(this.state.value);
  };
  handelChange = (e) => {
    if (e.target.value.trim() === "") {
      this.state.value.map((item) => {
        item.status = true;
        return true;
      });
      this.setState({
        value: this.state.value
      });
    }
  };
  Where = (e) => {
    if (this.refs.text.value.trim() !== "") {
      this.state.value.map((item) => {
        if (this.refs.text.value.trim() !== item.name) {
          item.status = false;
        }
        return false;
      });
      this.setState({
        value: this.state.value
      });
    } else {
      alert("Vui lòng nhập !");
    }
  };
  addToCart = (e) => {
    this.state.value.map((item) => {
      if(item.name === e.target.value) { 
        this.setState({
          card: [...this.state.card, item]
        });
      }
      return false;
    });
    // this.state.value.forEach(i => {
    //   if (i.name === e.target.value) {
    //     this.setState({
    //       card : [...this.state.card, i]
    //     });
    //     if(this.state.cart.length===0){
    //       this.setState({
    //         cart:[i]
    //       });
    //     }else{
    //       this.setState({
    //         cart:[...this.state.cart, i]
    //       });
    //     }
    //   }
    // });
    console.log(this.state.card);
  };

  removeProduct = (e) => {
    for(let i = 0; i < this.state.card.length; i++) {
      if(this.state.card[i].name === e.target.value) {
        this.setState({
          con : this.state.card.splice(i,1)
        });
      }
    }
    
    console.log(this.state.con);
  };
  render() {
    var newProduct = this.state.card.map((item,index) => {
      return(
        <>
        <CartProduct
              key={index}
              keyData={"card" + index}
              image={item.image}
              name={item.name}
              price={item.price}
              status={item.status}
              check={true}
              removeProduct={this.removeProduct}
            />
        </>
      );
    });
    var products = this.state.value.map((item, index) => {
      if (item.status === true) {
        return (
          <>
            <Product
              key={index}
              keyData={"product" + index}
              image={item.image}
              name={item.name}
              price={item.price}
              status={item.status}
              addToCart={this.addToCart}
            />
            <br />
          </>
        );
      }
      return false;
    });
    return (
      <>
        <div className="container">
          <br />
          <div className="row">
            <div className="col-md-4">
              <h2>
                <b style={{ color: "Green" }}>MENU</b>
              </h2>
            </div>
            <div className="col-md-4">
              <button
                className="btn btn-warning"
                data-toggle="modal"
                data-target="#modalLoginForm"
              >
                Create
              </button>
            </div>
            <div className="col-md-4">
              <div className="row">
                <div className="col-md-10">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      ref="text"
                      onChange={this.handelChange}
                    />
                  </div>
                </div>
                <div className="col-md-2">
                  <button className="btn btn-primary" onClick={this.Where}>
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="row">{products}</div>

          <div>
            <div
              className="modal fade"
              id="modalLoginForm"
              tabIndex={-1}
              role="dialog"
              aria-labelledby="myModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header text-center">
                    <h4 className="modal-title w-100 font-weight-bold">
                      Thêm món ăn
                    </h4>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body mx-3">
                    <div className="md-form mb-5">
                      <label
                        data-error="wrong"
                        data-success="right"
                        htmlFor="defaultForm-email"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control validate"
                        ref="name"
                      />
                    </div>
                    <div className="md-form mb-4">
                      <label
                        data-error="wrong"
                        data-success="right"
                        htmlFor="defaultForm-pass"
                      >
                        Price
                      </label>
                      <input
                        type="text"
                        className="form-control validate"
                        ref="price"
                      />
                    </div>
                    <div className="md-form mb-4">
                      <label
                        data-error="wrong"
                        data-success="right"
                        htmlFor="defaultForm-pass"
                      >
                        Image
                      </label>
                      <input
                        type="text"
                        className="form-control validate"
                        ref="image"
                      />
                    </div>
                  </div>
                  <div className="modal-footer d-flex justify-content-center">
                    <button
                      className="btn btn-danger"
                      onClick={this.Addproduct}
                    >
                      ADD
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center"></div>
          </div>

          <br />
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 style={{ color: "Green" }}><b>Cart</b></h3>
            </div>
          </div>
          <br />
          <div className="row">
            {newProduct}
          </div>
        </div>
      </>
    );
  }
}
export default App;
