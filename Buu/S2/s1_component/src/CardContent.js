import React from "react";

class CardContent extends React.Component {
  render() {
    let styleTitle = {
      color: "#279a96",
      textTransform: "uppercase"
    };
    return (
      <div>
        <div className="card-body p-3">
          <h5 className="card-title font-weight-bold" style={styleTitle}>
            {this.props.titleName}
          </h5>
          <p className="card-text">
            <small className="text-muted">
              {" "}
              {this.props.contentBlock}
              <span class="fa fa-star checked ml-2"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </small>
          </p>
          <p className="card-text">{this.props.textBlock}</p>
          <button type="button" className="card-text btn btn-info">
            READ MORE
          </button>
        </div>
      </div>
    );
  }
}

export default CardContent;
