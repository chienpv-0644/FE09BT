import React from "react";
import ItemTableName from "./ItemTableName";
import ItemTablePrice from "./ItemTablePrice";
import ItemTableCodition from "./ItemTableCondition";
import ItemTableColors from "./ItemTableColors";

class ShowProducts extends React.Component {
  render() {
    let center = {
      textAlign: "center"
    }
    console.log(this.props);
    let dataItemName = this.props.arrTable.map((arrTable, index) => {
      return <ItemTableName key={`Name ${index}`} arrTable={arrTable} />;
    });

    let dataItemPrice = this.props.arrTable.map((arrTable, index) => {
      return <ItemTablePrice key={`Price ${index}`} arrTable={arrTable} />;
    });
    let dataItemColors = this.props.arrTable.map((arrTable, index) => {
      return <ItemTableColors key={`Colors ${index}`} arrTable={arrTable} />;
    });

    let dataItemCondition = this.props.arrTable.map((arrTable, index) => {
      return (
        <ItemTableCodition key={`Condition ${index}`} arrTable={arrTable} />
      );
    });
    
    return (
      <div className="col-md-12 mt-5">
        <table className="table" style= {center}>
          <thead>
            <tr>
              <th scope="col"></th>
              {dataItemName}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Price</th>
              {dataItemPrice}
            </tr>
            <tr>
              <th scope="row">Colors</th>
              {dataItemColors}
            </tr>
            <tr>
              <th scope="row">Condition</th>
              {dataItemCondition}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default ShowProducts;
