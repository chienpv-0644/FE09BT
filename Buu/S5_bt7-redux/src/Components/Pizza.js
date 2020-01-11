import React from "react";
import ShowImages from "./ShowImages";
import OrderPizza from "./OrderPizza";
import { connect } from "react-redux";

class Pizza extends React.Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8 text-center">
            <ShowImages {...this.props}/>
          </div>
          <OrderPizza {...this.props}/>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    pizza: state
  };
};


export default connect(mapStateToProps)(Pizza);
