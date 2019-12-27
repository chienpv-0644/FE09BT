import React from 'react';
import './cardBought.css'

class CardBought extends React.Component{
    render() {
        return (
            <div className="itemBought p-2 bg-light mb-2">
                <div className="itemBought__img">
                    <img className="card-img" src={this.props.src} alt={this.props.alt}/>
                </div>
                <span className="col-2">{this.props.name} </span>
                <span className="col-2">{this.props.price} VND</span>
                { console.log('this.props.bought:', this.props.bought)}
                <span className="col-2">x{this.props.bought}</span>
                <span className="col-2">{this.props.price * this.props.bought} VND</span>
                <button id={this.props.id} className="btn btn-dark" onClick={this.props.handleDelete}>Delete</button>
            </div>
        );
    }
}

export default CardBought;