import React from "react";
import ItemImages from "./ItemImages";

class ShowImages extends React.Component {
  render() {
    let data = show(this.props);
    console.log(this.props.pizza);

    return (
      <div className="row">
        <h4 className="col-md-12">YOUR PIZZA</h4>
        {data}
      </div>
    );
  }
}
function show(props) {
  let arr = [];
  for (let i = 0; i < props.pizza.length; i++) {
    if (props.pizza[i].amount > 0) {
      arr.push(props.pizza[i]);
    }
  }
  let dataImages = arr.map((arr, index) => {
    return <ItemImages arr={arr} key={index} />;
  });
  console.log(dataImages);
  return dataImages;
}

export default ShowImages;
