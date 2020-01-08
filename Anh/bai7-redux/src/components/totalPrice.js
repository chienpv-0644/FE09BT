import React from "react";
import { connect } from "react-redux";

class TotalPrice extends React.Component {
  totalPrice = () => {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0
    });
    let data = this.props.dataProduce;
    let array = data.map((item, index) => item.price * item.number);
    return formatter.format(array.reduce((acc, curr) => acc + curr));
  };

  render() {
    return (
      <div className="border px-3 pt-2">
        <div className="row p-0">
          <p className="col-md-6">Total:</p>

          <p className="col-md-6 text-right">{this.totalPrice()}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    dataProduce: state.productList
  };
};

export default connect(mapStateToProps)(TotalPrice);
