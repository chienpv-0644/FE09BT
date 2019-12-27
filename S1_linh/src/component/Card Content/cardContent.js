import React from 'react';
import './cardContent.css'

class CardContent extends React.Component{
    render() {
        return (
            <div className="col-md-6" >
                <div className="card-body card-body--custom">
                    <h4 className="card-title card-title--custom">{this.props.title}</h4>
                    <p className="card-text card-text--custom text-muted">Posted by {this.props.author} | {this.props.date} | {this.props.language} |
                        <span>
                            <i className="fas fa-star fa-xs"></i>
                            <i className="fas fa-star fa-xs"></i>
                            <i className="fas fa-star fa-xs"></i>
                            <i className="fas fa-star fa-xs"></i>
                            <i className="fas fa-star fa-xs"></i>
                        </span>
                    </p>
                    <p className="card-text">{this.props.text}</p>
                    <button type="button" className="btn btn-secondary">READ MORE</button>
                </div>
            </div>
        )
    }
}

export default CardContent;