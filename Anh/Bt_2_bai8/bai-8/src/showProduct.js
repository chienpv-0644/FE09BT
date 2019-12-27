import React from 'react';

export class ShowProduct extends React.Component {
    render() {
        return (
            <div className="col-md-4 my-2">
                <div className="border border-black text-right p-3" >
                    <p className="text-left" style={{ height: 60 }}>{this.props.nameProduct} - {this.props.priceProduct}
                        {this.props.nuberOfProduct > 0 ? " x " + this.props.nuberOfProduct : <em className="mx-2 text-danger"><i>Out of stock</i></em>}</p>
                    <button className="btn btn-primary my-2" data-name-product={this.props.nameProduct} onClick={this.props.handlerClick}
                        disabled={this.props.nuberOfProduct > 0 ? false : true}>Add to card</button>
                </div>
            </div>
        );
    }
}

export default ShowProduct;
