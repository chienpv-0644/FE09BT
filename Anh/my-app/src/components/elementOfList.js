import React from 'react';

class ElementOfList extends React.Component {
    render() {
        return (
            <div className="row p-2 mb-1 m-0 bg-white">
                <div className="col-5 p-1">
                    <img className="img-thumbnail border-0" src={this.props.linkImage} />
                </div>
                <div className="col-7 p-1">
                    <h6 className="text-primary"><strong>{this.props.titleOfContent}</strong></h6>
                    <em className="text-secondary">Posted By {this.props.nameAuthor} | {this.props.timePost} | {this.props.introduceContent} | {this.props.poinOfPost} </em>
                    <p className="pElementOfList" >{this.props.contentPost}</p>
                    <button className="btn btn-light"><strong>READ MORE</strong></button>
                </div>
            </div>
        );
    }
}

export default ElementOfList