import React, { Component } from "react";
class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check: true
    };
  }
  Pay = () => {
    
    if(this.state.check)
    {
      alert("Bạn có chắc chắn mua ?");
    this.setState({
      check: false
    });
    }
    else
    {
      alert("Bạn có chắc muốn hủy ?");
      this.setState({
        check: true
      });
    }
  };

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
              <button className="btn btn-primary" onClick={this.Pay}>
                {this.state.check ? "Mua ngay" : "Đã mua"}
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Product;
