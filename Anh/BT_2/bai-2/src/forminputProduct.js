import React from 'react';

export class ForminputProduct extends React.Component {
    render() {
        return (
            <div>
                <div className="form-group">
                    <input type="text" className="form-control my-2" value={this.props.name} placeholder="name" name="name" onChange={this.props.handlerChangeInput} />
                    <input type="number" className="form-control my-2" value={this.props.price} placeholder="price" name="price" onChange={this.props.handlerChangeInput} />
                </div>
                <button className="btn btn-outline-primary" onClick={this.props.handlerClick}> Add </button>
            </div>
        );
    }
}

export default ForminputProduct;
