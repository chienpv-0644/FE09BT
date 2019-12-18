import React from 'react';
import './cardImage.css'

class CardImage extends React.Component{
    render() {
        return (
            <div className="cardImage">
                <img className="cardImage__image" src={this.props.src} alt={this.props.alt}/>
            </div>
        )
    }
}

export default CardImage;