import React from 'react';
import Card from '../card/card'

class ShoppingCart extends React.Component{

    render() {
        console.log(this.props)
        let products = this.props.product;
        let productItem = products.map((item, index)=>
            <Card key={`card${index}`}
                  id={item.id}
                  image={item.image}
                  alt={item.alt}
                  name={item.name}
                  price={item.price}
                  available={item.available}
                  bought={item.bought}
                  addCart={this.props.addCart}></Card>
        )
        return (
            <div>
                <h2>Shopping cart</h2>
                <div className="row">
                    {productItem}
                </div>
            </div>
        );
    }
}

export default ShoppingCart;