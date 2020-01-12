import React from 'react';
import './App.css';
import ShowImage from './component/showImage'
import Choose from './component/choose'
import OrderContext from './context'

class App extends React.Component {
  constructor() {
      super()
      this.state = {
          products: [
              {id: 1, name: 'Cold cuts', price: '5', count: 0, image: 'https://i.picsum.photos/id/780/300/300.jpg'},
              {id: 2, name: 'Pepperoni', price: '10', count: 0, image: 'https://i.picsum.photos/id/781/300/300.jpg'},
              {id: 3, name: 'Feta', price: '3', count: 0, image: 'https://i.picsum.photos/id/782/300/300.jpg'},
              {id: 4, name: 'cheese', price: '7', count: 0, image: 'https://i.picsum.photos/id/783/300/300.jpg'}
          ],
          activeProduct: null
      }
  }
  render() {
      return (
          <OrderContext.Provider value={
              {
                  products: this.state.products,
                  activeProduct: this.state.activeProduct,
                  handlerOnClickSub: (e)=> {
                      console.log('handler add')
                      let arr = this.state.products;
                      let id = e.target.id;
                      let indexSub = arr.findIndex(item => item.id == id)
                      if(arr[indexSub].count >= 1) {
                          arr[indexSub].count = arr[indexSub].count - 1;
                      }
                      this.setState({
                          products: arr,
                          activeProduct: arr[indexSub]
                      })
                  },
                  handlerOnClickAdd: (e)=> {
                      console.log('handler add')
                      let arr = this.state.products;
                      let id = e.target.id;
                      let indexAdd = arr.findIndex(item => item.id == id)
                      arr[indexAdd].count = arr[indexAdd].count + 1;
                      this.setState({
                          products: arr,
                          activeProduct: arr[indexAdd]
                      })
                  }

              }
          }>
              <div className="container my-5">
                  <div className="row no-gutters">
                      <ShowImage/>
                      <Choose/>
                  </div>
              </div>
          </OrderContext.Provider>

      );
  }
}

export default App;
