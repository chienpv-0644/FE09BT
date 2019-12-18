import React from 'react';
import './cardContent.css'

class CardContent extends React.Component{
    render() {
        return (
            <div className="cardContent">
                <h4 className="cardContent__title">{this.props.title}</h4>
                <p className="cardContent__subTitle">Posted by {this.props.author} | {this.props.date} | Javascript</p>
                <p  className="cardContent__subTitle">React |
                    <span className="vote">
                        <i className="fas fa-star fa-xs"></i>
                        <i className="fas fa-star fa-xs"></i>
                        <i className="fas fa-star fa-xs"></i>
                        <i className="fas fa-star fa-xs"></i>
                        <i className="fas fa-star fa-xs"></i>
                    </span>
                </p>
                <p className="cardContent__text">{this.props.text}</p>
                <a className="cardContent__button">READ MORE</a>
            </div>
        )
    }
}

export default CardContent;