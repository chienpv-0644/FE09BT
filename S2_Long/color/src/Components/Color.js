import React from 'react';
import './Color.css'
class Color extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { code } = this.props.color
        return (
            <div className="box">
                <div className="boxColor" style={{backgroundColor: code}}/>
                <h4>Code: {code}</h4>
            </div>
        );        
    }

}

export default Color;
