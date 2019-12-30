import React from 'react';


class Title_news extends React.Component {
    render() {
        var styleTitleNews = {
          height: '40px',
          backgroundColor: '#4682B4',
          padding: '5px 10px 20px 10px'
        };

        var styleTitleH3 = {
            color: "white",
        };
        return (
          <div style={styleTitleNews}>
            <h3 style={styleTitleH3}>BÀI VIẾT MỚI</h3>
          </div>
        );
    }
}

export default Title_news;