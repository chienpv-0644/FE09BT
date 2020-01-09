import React from "react";
import { connect } from "react-redux";
import { clickCompare } from "../action/compareProduct";

class OpacityProduce extends React.Component {
  render() {
    return (
      <div
        className={"over-opacity" + (this.props.compare ? " hover" : "")}
        onMouseOver={e => {
          e.target.classList.add("hover");
        }}
        onMouseOut={e => {
          if (!this.props.compare) e.target.classList.remove("hover");
        }}
      >
        <a
          href="#compare"
          className="btn cssBtn"
          onClick={() => this.props.handlerClickCompare(this.props.id)}
        >
          {this.props.compare ? "cance" : "compare"}
        </a>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handlerClickCompare: id => dispatch(clickCompare(id))
  };
};

export default connect(null, mapDispatchToProps)(OpacityProduce);
