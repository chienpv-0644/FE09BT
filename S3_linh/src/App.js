import React from 'react';
import './App.css';
import ShoppingCart from './component/shoppingCart/shoppingCart'
import YourCart from './component/yourCart/YourCart'

let data = [{id: 1, image: 'https://i.picsum.photos/id/530/300/350.jpg', alt: "flower", name: 'flower', price: '100000', available: 10, bought: 0},
            {id: 2, image: 'https://i.picsum.photos/id/529/300/350.jpg', alt: "music speaker", name: 'music speaker', price: '150000', available: 5, bought: 0},
            {id: 3, image: 'https://i.picsum.photos/id/528/300/350.jpg', alt: "book", name: 'book', price: '50000', available: 8, bought: 0},
            {id: 4, image: 'https://i.picsum.photos/id/527/300/350.jpg', alt: "compa", name: 'compa', price: '5000', available: 4, bought: 0},
            {id: 5, image: 'https://i.picsum.photos/id/533/300/350.jpg', alt: "rule", name: 'rule', price: '10000', available: 6, bought: 0}]
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      product: data,
      yourProduct: []
    }
  }
  handleClickAddCart(e, bought) {
      let id = e.target.id;
      let arr = this.state.product, arrBought = this.state.yourProduct;
      let index = arr.findIndex(item=> item.id == id)
      arr[index].bought = arr[index].bought + bought;
      arr[index].available = arr[index].available - bought;
      arr.splice(index, 1, arr[index])

      let check = arrBought.findIndex(item=> item.id== id);
      if(check === -1) {
          this.setState(prevState => ({
              product: arr,
              yourProduct: [arr[index], ...prevState.yourProduct]
          }))
      } else {
          arrBought.splice(check, 1, arr[index])
          this.setState({
              product: arr,
              yourProduct: arrBought
          })
      }

  }

  handleDelete(e) {
      let id = e.target.id, arr = this.state.yourProduct;
      let index = arr.findIndex(item=>item.id == id)
      arr.splice(index, 1)
      this.setState({
          yourProduct: arr
      })

  }

  render() {
      console.log(this.state.product)
    return (
        <div className="container my-5">
          <ShoppingCart  addCart={(e, bought) => this.handleClickAddCart(e, bought)} product={this.state.product} ></ShoppingCart>
            <hr/>
          <YourCart yourProduct={this.state.yourProduct} handleDelete={this.handleDelete.bind(this)}></YourCart>
        </div>
    );
  }
}

export default App;
