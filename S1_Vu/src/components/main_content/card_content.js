import React from 'react';


class Card_content extends React.Component {
    render() {
        var styleCardContent = {
            width: "50%",
            height: "100%",
            // backgroundColor: "pink"
        };

        var styleH3 = {
            color: "#1E90FF",
            fontWeigth: 700
        };

        var stylePosted = {
            color: "#A9A9A9",
            fontSize: "14px"
        };

        var styleContent = {
            color: "black",
            fontSize: "16px"
        };

        return (
            <div style={styleCardContent}>
                <a  href="#" ><h4 style={styleH3}>{this.props.title}</h4></a>
                <p style={stylePosted}>{this.props.posted}</p>
                <p style={styleContent}>{this.props.content}</p>
                <input type="button" value="READ MORE"/>
            </div>
        )
    }
}

export default Card_content;