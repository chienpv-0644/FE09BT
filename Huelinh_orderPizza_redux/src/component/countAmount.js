import React from 'react';
import {connect} from "react-redux";
import {addProduct, subProduct} from '../action/action'

class CountAmount extends React.Component{

    render() {
        let id = this.props.id
        return (
            <span className="text-right col-6">
                <button className="bg-white border px-3" onClick={()=>this.props.handlerOnClickSub(id)}>-</button>
                <input disabled className="border text-center w-25"
                       type="text"
                       value={this.props.count}
                       />
                <button className="bg-white border px-3" onClick={()=>this.props.handlerOnClickAdd(id)}>+</button>
             </span>
        )
    }

}

const mapDispatchToProps = (dispatch)=> {
    console.log('mapDispatchToProps')
    return{
        handlerOnClickAdd: (id)=>{dispatch(addProduct(id))},
        handlerOnClickSub: (id)=> {dispatch(subProduct(id))}
    }
}
export default connect(null, mapDispatchToProps)(CountAmount)