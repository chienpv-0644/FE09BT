import React from 'react';
import './cardImage.css'

class CardImage extends React.Component{
    render() {
        return (
           <div className="col-md-6 ">
               <img className="card-img card-img--custom p-3" src={this.props.src} alt={this.props.alt}/>
           </div>
        )
    }
}

export default CardImage;