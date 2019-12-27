import React from 'react';

export class CartProduct extends React.Component {
    render() {
        return (
            <div className="col-12">
                <p>{this.props.nameProduct} - {this.props.priceProduct} x {this.props.nuberOfProduct}</p>
            </div>
        );
    }
}

export default CartProduct;
