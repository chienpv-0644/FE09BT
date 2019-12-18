import React from 'react';

class Letter extends React.Component {
    render() {
        let styleLetter = {
            float: "left",
            margin: "10px",
            padding: "20px",
            fontSize: "30px",
            fontWeight: 500,
            backgroundColor: this.props.bgcolor
        };
        return (
        <div className = "item" style = {styleLetter}> {this.props.children}</div>
        )
    }
}
export default Letter;