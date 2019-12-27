import React from 'react';


class showComment extends React.Component {
    render() {
        return (
            <div>
                <div className="row p-2 mb-1 m-0 bg-white">
                    <div className="col-5 p-1">
                        <img className="img-thumbnail border-0" src={this.props.linkImage} />
                    </div>
                    <div className="col-7 p-1">
                        <p className="pElementOfList text-left text-secondary" >{this.props.contentPost}</p>
                    </div>
                </div>
            </div>
        );
    }
}


export default showComment;