import React from 'react';
import {connect} from "react-redux";
import './compareProduct.css'

class CompareProducts extends React.Component{
    render() {
        console.log('compare productt: ',this.props.compareProducts);
        let compareProducts = this.props.compareProducts;
        let head, price, color, condition;
        console.log(compareProducts.length > 1)
        if(compareProducts.length > 1) {
            head = compareProducts.map((item, index)=> <th key={index+1}>{item.name}</th>)
            price = compareProducts.map((item, index)=> <td key={index+1}>${item.price}</td>)
            condition = compareProducts.map((item, index)=> <td key={index+1} className={`condition bg-${item.condition}`}>{item.condition}</td>)
            color = compareProducts.map((item, index)=>
                 <td key={index+1}>
                    {item.color.map((item, index)=> <span key={index+1} className={`color bg-${item}`}></span>)}
                </td>
            )
        }
        return (
            <div className="compare">
                { compareProducts.length > 1 &&
                    <table className="table tableProduct bg-white text-center">
                        <thead>
                        <tr>
                            <th></th>
                            {head}
                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <th>Price</th>
                            {price}
                        </tr>
                        <tr>
                            <th>Color</th>
                            {color}
                        </tr>
                        <tr>
                            <th>condition</th>
                            {condition}
                        </tr>
                        </tbody>
                    </table>
                }
            </div>
        );
    }
}

const mapStateToProps = (state)=> {
    return {
        compareProducts: state.compares
    }
}

export default connect(mapStateToProps)(CompareProducts)