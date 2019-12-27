import React from 'react';

class CountAmount extends React.Component{

    onKeyPress(e) {
        const reg = /^[0-9]/;
        if(!reg.test(e.key)) {
            e.preventDefault();
        }
    }
    render() {
        return (
            <span className="text-center">
                <button className="bg-white border px-3" onClick={this.props.onClickSub}>-</button>
                <input className="border text-center w-25" type="text" value={this.props.bought} onKeyPress={this.onKeyPress} onChange={this.props.onChange} onBlur={this.props.onBlur}/>
                <button className="bg-white border px-3" onClick={this.props.onClickAdd}>+</button>
            </span>
        );
    }
}

export default CountAmount;