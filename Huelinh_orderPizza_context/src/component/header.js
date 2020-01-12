import React from 'react';
import OrderContext from '../context'

class Header extends React.Component {
    render() {
        console.log('headerr')
        let activeProduct = {price: 0, count: 0}
        console.log('activeProduct:',activeProduct)
        if(this.context.activeProduct) {
            activeProduct.price = this.context.activeProduct.price;
            activeProduct.count = this.context.activeProduct.count;
        }
        console.log('activeProduct:',activeProduct)
        return (
            <div className="form-inline">
                <p className="col-4 m-0">Your pizza:</p>
                <p  className="col-4 m-0">{activeProduct.price * activeProduct.count}$</p>
                <button className="btn btn-success col-4">Reset pizza</button>
            </div>
        )
    }
}

Header.contextType = OrderContext
export default Header