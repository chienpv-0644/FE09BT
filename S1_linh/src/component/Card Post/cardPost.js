import React from 'react';
import './cardPost.css'
class CardPost extends React.Component{
    render() {
        return (
            <div className="card">
                <div className="row no-gutters px-3 py-2">
                    <div className="col-4">
                        <img className="card-img pr-2" src={this.props.src} alt={this.props.alt}/>
                    </div>
                    <div className="col-8">
                        <a href="#" className="card__title">{this.props.title}</a>
                        <p className="card__text text-muted">{this.props.text}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardPost;