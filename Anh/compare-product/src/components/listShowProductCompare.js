import React from "react";
import ItemShowProductCompare from "./itemShowProductCompare";
import { connect } from "react-redux";

class ListShowProductCompare extends React.Component {
  render() {
    let title = {
      id: "id",
      name: "Name",
      price: "price",
      Colors: ["Colors"],
      Condition: "Condition",
      title: "title",
      image: "image",
      compare: "compare"
    };
    let dataRender;
    let dataHeader;
    if (this.props.dataProduce.length > 1) {
      dataHeader = (
        <ItemShowProductCompare product={title} addClass="border-right" />
      );
      dataRender = this.props.dataProduce.map((iteam, index) => (
        <ItemShowProductCompare key={index + "ItemProduct"} product={iteam} />
      ));
    }
    return (
      <div className="row shadow my-5">
        {dataHeader}
        {dataRender}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    dataProduce: state.productListCompare
  };
};

export default connect(mapStateToProps)(ListShowProductCompare);
