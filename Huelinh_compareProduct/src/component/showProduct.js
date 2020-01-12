import React from 'react';
import ProductCard from './productCard'
import {connect} from "react-redux";

class ShowProducts extends React.Component{
    render() {
        let products = this.props.products;
        console.log('product after', products)
        let listProducts = products.map((item, index)=> {
            return <ProductCard key={`product${index+1}`} product={item}/>
        })
        return (
            <>
                <h2>Compare Products</h2>
                <div className="row">
                    {listProducts}
                </div>
            </>
        );
    }
}

const mapStateToProps = (state)=> {
    console.log('state in showProduct:', state.products)
    return {
        products: state.products
    }
}
export default connect(mapStateToProps)(ShowProducts)