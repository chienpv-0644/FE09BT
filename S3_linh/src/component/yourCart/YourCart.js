import React from 'react';
import CardBought from '../cardBought/cardBought'
import Total from '../total/total'

class YourCart extends React.Component{
    render() {
        console.log(this.props)
        let yourProducts = this.props.yourProduct;
        let yourProductItem = yourProducts.map((item, index)=>
            <CardBought key={`itemBought${index}`}
                        src={item.image}
                        alt={item.alt}
                        name={item.name}
                        price={item.price}
                        available={item.available}
                        bought={item.bought}
                        id={item.id}
                        handleDelete={this.props.handleDelete}
            ></CardBought>
        )
        let total = yourProducts.reduce((total, item) => total+ item.price*item.bought , 0)
        console.log('total', total)
        return (
            <div>
                <h2>Your cart</h2>
                {yourProductItem}
                <Total total={total}></Total>
            </div>
        );
    }
}

export default YourCart;