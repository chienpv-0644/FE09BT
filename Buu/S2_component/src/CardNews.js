import React from "react";

class CardNews extends React.Component {
  render() {
    let spaceImages = {
      padding: "15px 0px 0px 20px"
    };
    return (
      <div className="card">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img
              style={spaceImages}
              src={this.props.imageNews}
              className="card-img"
              alt="..."
            ></img>
          </div>
          <div className="col-md-8">
            <div className="card-body px-2 py-3">
              <h5 className="card-title">{this.props.titleNews}</h5>
              <p className="card-text">{this.props.textNews}</p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardNews;
