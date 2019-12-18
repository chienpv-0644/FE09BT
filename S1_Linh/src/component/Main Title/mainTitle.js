import React from 'react';
import './mainTitle.css'

class MainTitle extends React.Component{
    render() {
        return (
            <h2 className="mainTitle">{this.props.title}</h2>
        )
    }
}

export default MainTitle;