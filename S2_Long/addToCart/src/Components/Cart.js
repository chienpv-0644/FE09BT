import React from 'react';
import './Cart.css'
class Cart extends React.Component { 
    // constructor(props) {
    //     super(props)
    // }
    render() {
        const { dish, quantity, price } = this.props
        return (
            <div className='item'>
                <div className='left'>
                    <p>{dish}</p>
                </div>
                <div className='right'>
                    {
                        quantity && <p>{price} x {quantity} = {price*quantity}$</p>
                    }
                    {
                        !quantity && <p>{price}$</p>
                    }
                </div>
            </div>
        )
    }
}

export default Cart