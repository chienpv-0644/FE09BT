import React from 'react';
import './TodoList.css'
class TodoList extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { name, price } = this.props.data
        return (
            <div className='styleItem'>
                <span>{name}: </span>
                <span>{price}VND</span>
            </div>
        );        
    }

}

export default TodoList;
