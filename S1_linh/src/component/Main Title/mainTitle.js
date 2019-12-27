import React from 'react';
import './mainTitle.css'

class MainTitle extends React.Component{
    render() {
        return (
            <h3 className="mainTitle">{this.props.title}</h3>
        )
    }
}

export default MainTitle;