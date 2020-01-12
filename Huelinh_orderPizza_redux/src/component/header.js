import React from 'react';
import {connect} from "react-redux";

class Header extends React.Component {
    render() {
        console.log('headerr')
        let activeProduct = {price: 0, count: 0}
        console.log('activeProduct:',activeProduct)
        if(this.props.activeProduct) {
            activeProduct.price = this.props.activeProduct.price;
            activeProduct.count = this.props.activeProduct.count;
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

const mapStateToProps = (state)=> {
    console.log('mapstate in header', state);
    return {
        activeProduct: state.activeProduct
    }
}
export default connect(mapStateToProps)(Header)
//export default Header