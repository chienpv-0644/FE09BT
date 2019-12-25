import React from 'react';
// import Card_image from './card_image';
// import Card_content from './card_content';


class Block_card extends React.Component {
    render () {
        var styleBlockCard = {
          width: '100%',
          margin: '0px 0px 2px 2px',
          display: 'flex',
          backgroundColor: "white"
        };

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

        var styleCardContent = {
          width: "50%",
          height: "100%",
          // backgroundColor: "pink"
        };

        var styleH3 = {
          color: "#1E90FF",
          fontWeigth: 700,
          textDecoration: "none"
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
          <div>
            <div style={styleBlockCard}>
              <div style={styleCardImage}>
                <a href="#">
                  <img src={this.props.img} style={styleImg}></img>
                </a>
              </div>

              <div style={styleCardContent}>
                <a href="#" style={styleH3}>
                  <h4>{this.props.title}</h4>
                </a>
                <p style={stylePosted}>{this.props.posted}</p>
                <p style={styleContent}>{this.props.content}</p>
                <input type="button" value="READ MORE" />
              </div>
            </div>
          </div>
        );
    }
}

export default Block_card;
