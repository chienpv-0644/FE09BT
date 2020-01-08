import React from "react";
import ListProduce from "./listProduce";
import ListImage from "./listImage";

class Content extends React.Component {
  render() {
    return (
      <div className="container my-4">
        <div className="row">
          <div className="col-md-6">
            <ListImage />
          </div>
          <div className="col-md-6">
            <ListProduce />
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
