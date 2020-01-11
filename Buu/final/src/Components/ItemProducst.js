import React from "react";
import { connect } from "react-redux";
import "./hover.css";
import { addProducts, removeProducts } from "../actions/ActionsProducts";

class ItemProducst extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      text: "COMPARE",
      id: ""
    };
  }

  handlerClick = e => {
    //console.log(this.state.id)
    this.setState({
      id: e.target.id
    });
    if (!this.state.Clicked) {
      this.setState({
        Clicked: true,
        text: "REMOVE"
      });
      this.props.handlerAddProducts(e.target.id);
    } else {
      this.setState({
        Clicked: false,
        text: "COMPARE"
      });
      this.props.handlerDeleteProducts(e.target.id);
    }
  };
  render() {
    let p_price = {
      color: "#48cfad",
      fontSize: "18px"
    };
    let p_present = {
      color: "#b1b1b3"
    };
    let col = {
      position: "relative",
      width: "100%",
      paddingRight: "0px",
      paddingLeft: "0px"
    };
    let clickState = {
      opacity: 1
    };
    let baseState = {};
    let className = this.state.Clicked ? clickState : baseState;
    return (
      <div className="card col-md-3 mr-3" style={col}>
        <div className="hovereffect">
          <img
            className="card-img-top"
            src={this.props.products.image}
            alt="Card image cap"
          />
          <div className="overlay" style={className}>
            <h2>{this.props.products.name}</h2>
            <a
              className="info"
              href="#"
              id={this.props.products.id}
              onClick={this.handlerClick}
            >
              {this.state.text}
            </a>
          </div>
        </div>

        <div className="card-body">
          <div className="row">
            <div className="col-md-8">
              <h5 className="card-title">{this.props.products.name}</h5>{" "}
            </div>
            <div className="col-md-4 text-right">
              <p style={p_price}>${this.props.products.price}</p>
            </div>
          </div>
          <p className="card-text" style={p_present}>
            {this.props.products.present}
          </p>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handlerAddProducts: idItem => dispatch(addProducts(idItem)),
  handlerDeleteProducts: idItem => dispatch(removeProducts(idItem))
});

export default connect(null, mapDispatchToProps)(ItemProducst);
