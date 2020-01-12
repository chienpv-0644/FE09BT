import React from 'react';
import Product from './product'
import OrderContext from '../context'

class Content extends React.Component {
    constructor(){
        super()
    }
    render() {
        console.log('prodcut content:',this.context.products);
        let listProducts = this.context.products.map((item, index)=> {
            return <Product key={index + 1} index={index + 1} product={item}/>
        })

        let listProductCounted = this.context.products.filter(item=> item.count > 0)
        let total = listProductCounted.reduce((S, item)=> S + item.count * item.price, 0)
        console.log('total:', total)
        return (

            <table className="table-bordered w-100 mt-3">
                <tbody>
                    {listProducts}
                    <tr>
                        <td className="row no-gutters p-2">
                            <span className="col-6">Total:</span>
                            <span className="col-6 text-right">{total}$</span>
                        </td>
                    </tr>
                    <tr>
                        <td className="row no-gutters p-2">
                            <button className="btn btn-primary">Checkout</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

Content.contextType = OrderContext;
export default Content