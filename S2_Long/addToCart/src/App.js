import React from 'react';
import './App.css';
import TodoList from './Components/TodoList';
import { Icon, Button } from 'antd';
import Cart from './Components/Cart';
class App extends React.Component {
  constructor(props) { 
    super(props)
    this.state = {
      YourCart: [],
      showCart: false,
      todoItems: [
        {
          name: 'Cold cuts',
          price: 5,
        },
        {
          name: 'Pepperoni',
          price: 3.5,
        },
        {
          name: 'Feta',
          price: 2.5,
        },
        {
          name: 'Mozzarella',
          price: 1.5,
        },
        {
          name: 'Swiss cheesse',
          price: 3,
        },
        {
          name: 'Spices',
          price: 0.5,
        },
        {
          name: 'Vegatables',
          price: 1.25,
        },
      ]
    }
  }
  addProduct = (e) => {
    this.setState({
      YourCart: [...this.state.YourCart,e.target.value]
    })
  }
  toggleCart = () => {
    this.setState({
      showCart: !this.state.showCart
    })
  }
  render() {
    const { todoItems, YourCart, showCart } = this.state;
    let totalPrice = 0;
    const total = YourCart.reduce((obj, key) => {
      if(!obj[key]) obj[key] = 1
      else obj[key]++
      return obj
    },{})
    return (
        <div className="App">
          <div className="Product">
            <div className="Heading">
              <h3>Menu pizza</h3>
              <Button type={showCart === false ? 'primary' : 'danger'} onClick={this.toggleCart}>Your Cart ({YourCart.length})<Icon type="shopping-cart"/></Button>
            </div>
            {
              todoItems.map((item,index) => {
                return <TodoList key={index} item={item} addProduct={this.addProduct}/>
              })
            }
          </div>
          <div className="Cart">
              {
                showCart && <h3 className="Title">Your Cart</h3>
              }
              { 
                showCart 
                && Object.entries(total).map((order, index) => {
                const dish = todoItems.filter(item => item.name === order[0])[0]
                const price = dish.price
                totalPrice += price * order[1]
                return <Cart key={index} dish={order[0]} quantity={order[1]} price={price}/>
                })
              }
              {
                showCart && <Cart dish='Total' price={totalPrice}/>
              }
          </div>
        </div>
    );
  }
}

export default App;
