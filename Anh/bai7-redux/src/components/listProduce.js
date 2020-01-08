import React from "react";
import ItemProduce from "./itemProduce";
import TotalPrice from "./totalPrice";
import { connect } from "react-redux";

class ListProduce extends React.Component {
  constructor() {
    super();
    this.state = {
      // dataProduceCurr: []
    };
    this.nameRef = React.createRef();
  }

  // static getDerivedStateFromProps = (props, state) => {
  //   if (props.dataProduce.productList != state.dataProduceCurr) {
  //     console.log("change props");
  //     return {
  //       dataProduceCurr: props.dataProduce.productList,
  //     };
  //   }
  //   return null;
  // };

  render() {
    let data = this.props.dataProduce;
    return (
      <div>
        {data.map((item, index) => (
          <ItemProduce key={index + "ItemProduce"} product={item} />
        ))}
        <TotalPrice />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    dataProduce: state.productList
  };
};

export default connect(mapStateToProps)(ListProduce);
