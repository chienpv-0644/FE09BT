import React from 'react';
import './cardPost.css'
class CardPost extends React.Component{
    render() {
        return (
            <div className="cardPost">
                <div className="cardPost__image">
                    <img src={this.props.src} alt={this.props.alt}/>
                </div>
                <div className="cardPost__content">
                    <a href="#"><h4 className="cardPost__title">{this.props.title}</h4></a>
                    <p className="cardPost__text">{this.props.text}</p>
                </div>
            </div>
        )
    }
}

export default CardPost;