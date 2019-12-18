import React from 'react';
// import img from './img';


class Card_image extends React.Component {
    render() {
        var styleCardImage = {
            width: "50%",
            height: "250px",
            // backgroundColor: "yellow"
            
        };

        var styleImg = {
            width: "95%",
            height: "90%",
            padding: "10px 10px 10px 10px"
        };
        return (
          <div style={styleCardImage}>
            <img src={this.props.img} style={styleImg}></img>
          </div>
        );
    }
}

export default Card_image;