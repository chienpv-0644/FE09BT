import React from 'react';
import Search from './Search';
import './TaskList.css';
import TaskItem from './TaskItem';
import YourCart from './yourCart';

var [ name, price, quantity ] = [];
class TaskList extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
           name: '',
           price: '',
           quantity: 0,
           lists: []
        }
    }

    onUpdate = (obj) => {
        [ name, price, quantity ] = obj;
        var { lists } = this.state;
        console.log(name + price + quantity);
        lists.push(obj)
        this.setState({
            name: name,
            price: price,
            quantity: quantity
        })
        localStorage.setItem('lists', JSON.stringify(lists))
    }
    
    componentDidMount () {
        if (localStorage && localStorage.getItem('lists')) {
          var lists = JSON.parse(localStorage.getItem('lists'))
          this.setState({
            lists: lists
          });
        }
      }
    
    ClearCart = () => {
        var { lists } = this.state;
        this.setState({
            lists: []
        })
        alert('Check out is successfuly ')
        localStorage.setItem('lists', JSON.stringify(lists))
    }

  render () {
    var { tasks, obj } = this.props;
    var { name, price, quantity, lists } = this.state;
    console.log(name + price + quantity);
    var elementTasks = tasks.map((task, index) => {
        return <TaskItem 
            key={index + 1} 
            index={index} 
            task={task} 
            onUpdate={ this.onUpdate }/>
    })

    var elementLists = lists.map((list, index) => {
        return <YourCart 
                    key={index}
                    list={list}/>
    })

    return (
        <div className="TaskList">
            <div className="search">
                <div className="searchDishs">
                    <Search  onSearch={ this.props.onSearch }/>
                </div>
            </div>
            <div className="tasklists">
                { elementTasks }
            </div>
            <div className="yourCart">
                <div className="showCart">
                    <h3>YOUR CART</h3>
                    <div className="Checkout">
                        { elementLists }
                    </div>
                </div>
                <button type="button" onClick={ this.ClearCart }>Check out</button>
            </div>
        </div>
    );
  };
}

export default TaskList;
