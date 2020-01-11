import React from "react";

class ItemPizza extends React.Component {
  render() {
    let size = {
      width: "60px",
      textAlign: "center",
      height: "34px"
    };
    let color = {
      color: "#a8adb1"
    };
    return (
      <div className="card tex">
        <div className="card-body">
          <div className="card-text">
            <div className="row">
              <div className="col-md-6">
                <p>
                  {this.props.pizza.name}
                  <br />
                  <small style={color}>{this.props.pizza.price}$</small>
                </p>
              </div>
              <div className="col-md-6 text-right">
                <button
                  disabled = { this.props.pizza.amount == 0}
                  id={this.props.pizza.id}
                  onClick={() =>
                    this.props.handlerReductionDish(this.props.pizza.id)
                  }
                  className="btn btn-danger"
                >
                  -
                </button>
                <input value={this.props.pizza.amount} style={size} disabled />
                <button
                  onClick={() =>
                    this.props.handlerIncreaseDish(this.props.pizza.id)
                  }
                  id={this.props.pizza.id}
                  className="btn btn-info"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

  
export default ItemPizza;
