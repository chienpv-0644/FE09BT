import React from 'react';

export class CardProduct extends React.Component {
    render() {
        return (
            <div className="card my-3 col-xl-3 col-md-6 border-0">
                <div className="card-body border">
                    <h5 className="card-title">{this.props.nameProduce}</h5>
                    <p className="card-text">{this.props.priceProduce}</p>
                    <a href="#add" className="btn btn-primary">add</a>
                </div>
            </div>
        );
    }
}

export default CardProduct;
