import React from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css'
import './TodoList.css'
class TodoList extends React.Component { 
    // constructor(props) {
    //     super(props)
    // }
    render() {
        const { name, price } = this.props.item
        const { addProduct } = this.props
        return (
            <div className='item'>
                <div className='left'>
                    <p>{name}</p>
                    <p>{price}$</p>
                </div>
                <div >
                    <Button type="danger" value={name} onClick={addProduct}>Add to cart</Button>
                </div>
            </div>
        )
    }
}

export default TodoList