import React from 'react';
import Product from './product'
import {connect} from "react-redux";

class Content extends React.Component {
    constructor(){
        super()
    }
    render() {
        console.log('prodcut content:',this.props.products);
        let listProducts = this.props.products.map((item, index)=> {
            return <Product key={index + 1} index={index + 1} product={item}/>
        })

        let listProductCounted = this.props.products.filter(item=> item.count > 0)
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

const mapStateToProps = (state) => {
    console.log('mapstate in content:', state.products)
    return {
        products: state.products,
    }

}
export default connect(mapStateToProps)(Content)