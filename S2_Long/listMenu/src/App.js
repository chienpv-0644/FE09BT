import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newItem: {
        name: '',
        price: ''
      },
      nameSearch: '',
      filterItems: '',
      todoItems: [
        {name: 'Xôi gà',price: 10000},
        {name: 'Bánh mì',price: 15000},
        {name: 'Mì quảng',price: 20000},
        {name: 'Bánh xèo',price: 5000}
      ]
    }
  }
  nameItem = (e) => {
    this.setState({
      newItem: {
        ...this.state.newItem,
        name: e.target.value
      }
    })
  }
  priceItem = (e) => {
    this.setState({
      newItem: {
        ...this.state.newItem,
        price: e.target.value
      }
    })
  }
  nameSearch = (e) => {
    this.setState({
      nameSearch: e.target.value
    })
  }
  addItem = () => {
    const { newItem } = this.state;
    this.setState({
      newItem: {
        name: '',
        price: ''
      },
      todoItems: [
        {
          name: newItem.name,
          price: newItem.price
        },
        ...this.state.todoItems
      ]
    })
  }
  searchItem = () => {
    const { nameSearch } = this.state;
    this.setState({
      ...this.state,
      nameSearch: '',
      filterItems: nameSearch
    })
  }
  render() {
    const { todoItems, newItem, nameSearch, filterItems } = this.state
    return (
      <div className="App">
        <div className="model">
          <div className="action">
            <label>Name: </label>
            <input type="text" 
                placeholder="Name" 
                value={newItem.name}
                onChange={this.nameItem}
            />
            <label>Price: </label>
            <input type="text" 
                placeholder="Price" 
                value={newItem.price}
                onChange={this.priceItem}
            />
            <input type="button" value='Add' onClick={this.addItem}/>
          </div>
          <div className="action">
            <label>Search: </label>
            <input type="text" 
                placeholder={filterItems} 
                value={nameSearch}
                onChange={this.nameSearch}
            />
            <input type="button" value='Search' onClick={this.searchItem}/>
          </div>
        </div>
        <div className='model'>
          <b>Todo List</b>
          {
            filterItems === '' && todoItems.map((dish,index) => {
              return <TodoList key={index} data={dish} />
            })
          }
          {
            filterItems !== '' && todoItems.filter(dish => {
              return dish.name.toLowerCase().indexOf(filterItems.toLowerCase()) !== -1
              }).map((dish,index) => {
              return <TodoList key={index} data={dish} />
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
