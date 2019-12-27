import React from 'react';

class Total extends React.Component{
    render() {
        return (
            <div className="text-right">
                <div><strong>Total:</strong> {this.props.total} VND</div>
                <button className="btn btn-dark ml-2">Buy</button>
            </div>
        );
    }
}

export default Total;