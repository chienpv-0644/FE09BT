import React from 'react';
import OrderContext from '../context'

class CountAmount extends React.Component{

    render() {
        let id = this.props.id
        return (
            <span className="text-right col-6">
                <button id={id} className="bg-white border px-3" onClick={this.context.handlerOnClickSub}>-</button>
                <input disabled className="border text-center w-25"
                       type="text"
                       value={this.props.count}
                       />
                <button id={id} className="bg-white border px-3" onClick={this.context.handlerOnClickAdd}>+</button>
             </span>
        )
    }

}

CountAmount.contextType = OrderContext;
export default CountAmount