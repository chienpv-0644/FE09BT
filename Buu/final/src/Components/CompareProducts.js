import React from "react";
import Products from "./Products";
import ShowProducts from "./ShowProducts";
import { connect } from "react-redux";

class CompareProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      idAdd: "",
      arrTable: []
    };
  }
  render() {
    let dataTable = showTable(this.props)
    return (
      <div className="container">
        <div className="row mt-5">
          <Products/>
        </div>
        <div className="row">
         {dataTable}
        </div>
      </div>
    );
  }
}
 function showTable(props) {
   console.log(props);
   
   if(props.arrTable.length >1) {
      return <ShowProducts {...props}/>
   }
  }
const mapStateToProps = state => {
  console.log(state)
  return {
    arrTable: state.arrTable
  };
};
export default connect(mapStateToProps)(CompareProducts);
