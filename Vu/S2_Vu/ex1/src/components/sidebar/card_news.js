import React from 'react';


class Card_news extends React.Component {
    render() {
        var styleCardNews = {
          width: '100%',
          backgroundColor: 'white',
          display: 'flex',
          margin: '0px 0px 2px 0px'
        };

        var styleCardImg = {
            width: "30%",
            margin: "0px 10px 10px 0px"
        };
        
        var styleImgNews = {
          width: '95%',
          padding: '20px 10px 10px 10px',
        };

        var styleCardContent = {
            width: "70%",
            
        };

        var styleText = {
            fontSize: " 16px",
            textDecoration: "none"
        };
        return (
          <div>
            <div style={styleCardNews}>
              <div style={styleCardImg}>
                <a href="#">
                  <img src={this.props.img} style={styleImgNews} />
                </a>
              </div>

              <div style={styleCardContent}>
                <a href="#" style={styleText}>
                  <h4>{this.props.title}</h4>
                </a>
                <p style={styleText}>{this.props.posted}</p>
              </div>
            </div>
          </div>
        );
    }
}

export default Card_news;