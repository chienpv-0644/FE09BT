import React from 'react';
import YourCart from './yourCart';
import './TaskItem.css'


class TaskItem extends React.Component {
   constructor (props) {
       super (props);
       this.state = {
            name: '',
            price: '',
            count: 1,
            quantity: 1
       };
   }

   decrease = () => {
       var currentCount = this.state.count;
       currentCount -= 1;
        this.setState({
            count: currentCount,
            quantity: currentCount
        })
        console.log(this.state.count + '_' + this.state.quantity);
        if (this.state.count && this.state.quantity <= 1) {
            alert("Dishs must be more than 1")
        }
   }

   increase = () => {
        var currentCount = this.state.count;
        currentCount += 1;
        this.setState({
            count: currentCount,
            quantity: currentCount
        })
    }

    changeQuantily = (e) => {
        this.setState({
            [e.target.name]: parseInt(e.target.value),
            count: parseInt(e.target.value)
        })
    }

    onUpdate = (name, price, quantity) => {
        name = this.props.task.name;
        price = this.props.task.price;
        quantity = this.state.quantity;
        this.setState({
            name: name,
            price: price
        })
        var obj = [name, price, this.state.quantity]
        this.props.onUpdate(obj)
        console.log(name + ' ' + price + ' ' + quantity);
        console.log(obj);

        if (this.state.quantity <= 1) {
            alert("Dishs must be more than 1")
        }
        this.onClearQuantity()
    }

    onClearQuantity = () => {
        this.setState({
            count: 1,
            quantity: 1
        })
    }
  render () {
      var { task, index } = this.props;
    return (
        <div className="taskItem">
            <table>
                <thead>
                    <tr>
                        <th className="stt">{ index + 1 }</th>
                        <th className="nameTask">{ task.name }</th>
                        <th className="priceTask">{ task.price }</th>
                        <th className="countDishs">
                            <button className="dec" onClick={ this.decrease } >-</button>
                            <input 
                                type="number" 
                                placeholder="1"
                                value={ this.state.quantity }
                                name="quantity"
                                onChange={ this.changeQuantily }
                            ></input>
                            <button onClick={ this.increase } className="inc">+</button>
                        </th>
                        <th className="addToCart">
                            <button type="button" onClick={ this.onUpdate }>Add to List</button>
                        </th>
                    </tr>
                </thead>
            </table>
        </div>
    );
  };
}

export default TaskItem;
