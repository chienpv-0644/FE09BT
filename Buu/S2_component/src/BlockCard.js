import React from "react";
import CardImages from "./CardImages";
import CardContent from "./CardContent";

class BlockCard extends React.Component {
  render() {
    return (
      <div>
        <div className="card">
          <div className="row no-gutters">
            <div className="col-md-6">
              <CardImages {...this.props}></CardImages>
            </div>
            <div className="col-md-6">
              <CardContent {...this.props}></CardContent>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BlockCard;
