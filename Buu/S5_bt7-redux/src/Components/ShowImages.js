import React from 'react';
import ItemImages from './ItemImages';

class ShowImages extends React.Component {
    render() {
      let x = show(this.props.pizza);
      console.log(x);
      
      return (
        <div className="row">
          <h4 className="col-md-12">YOUR PIZZA</h4>
          {x}
        </div>
      );
    }
  }
  function show (props) {
    let arr = [];
    for( let i = 0 ; i < props.pizza.length ; i++) {
      if(props.pizza[i].amount > 0) {
        arr.push(props.pizza[i]);
      }
    }
    let dataImages = arr.map((arr,index) => {
      return <ItemImages arr={arr} key={index}/>
    })
    return dataImages;
  }
  export default ShowImages;
  