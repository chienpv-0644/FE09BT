import React, { Component } from "react";
class CardSmall extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img
                alt="cc"
                style={{ width: 50, height: 50 }}
                src={this.props.image}
              />
            </div>
            <div className="col-md-8">
              <h5>
                <b>{this.props.title}</b>
              </h5>
              <p>
                {this.props.comment}
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CardSmall;
