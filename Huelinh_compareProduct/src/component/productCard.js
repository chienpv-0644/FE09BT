import React from 'react';
import './productCard.css'
import {connect} from "react-redux";
import {compareProduct} from '../action/action';

class ProductCard extends React.Component{
    render() {
        console.log('product in card:', this.props.product)
        let {id, name, des, price, isCompare, image, color, condition} = this.props.product;
        console.log('isCompare:',isCompare)
        let classProduct = isCompare ? ' compare' : ''
        let contentBtn = isCompare ? ' remove' : 'compare'
        console.log("render => ");
        return (
            <div className="col-sm-6 col-md-3">
                <div className={`product card ${classProduct}`}>
                    <span className="imageProduct">
                    <img className="card-img-top" src={image} alt={name}/>
                    <button onClick={()=>this.props.handleCompare(id)} className="buttonProduct">{contentBtn}</button>
                </span>
                    <div className="card-body">
                    <span className="about">
                        <span className="title">{name}</span>
                        <span className="price">${price}</span>
                    </span>
                        <span className="text-muted">{des}</span>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log('mapDispatchToProps')
    return{
        handleCompare: (id)=>{dispatch(compareProduct(id))}
    }
}
export default connect(null, mapDispatchToProps)(ProductCard)