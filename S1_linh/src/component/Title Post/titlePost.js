import React from 'react';
import './titlePost.css'

class TitlePost extends React.Component{
    render() {
        return (
            <div className="titlePost">{this.props.title}</div>
        )
    }
}

export default TitlePost;