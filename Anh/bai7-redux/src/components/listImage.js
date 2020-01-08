import React from "react";
import ItemImage from "./itemImage";
import { connect } from "react-redux";

class ListImage extends React.Component {
  render() {
    let data = this.props.dataProduce;
    let listDAta;
    if (data.length > 0) {
      {
        listDAta = data.map((item, index) => (
          <ItemImage name={item.name} number={item.number} />
        ));
      }
    } else {
      listDAta = <h1>Empty</h1>;
    }
    return <div className="row">{listDAta}</div>;
  }
}

const mapStateToProps = state => {
  let dataProduce = state.productList.filter(item => item.number !== 0);
  dataProduce.length != 0;
  return {
    dataProduce
  };
};

export default connect(mapStateToProps)(ListImage);
