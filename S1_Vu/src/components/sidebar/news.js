import React from 'react';
import Title_news from './title_news';
import Card_news from './card_news';

class News extends React.Component {
    render() {
        var styleNews = {
          width: '80%',
          padding: '2px 0px 0px 0px',
          margin: '20px 10px 10px 5px',
          
        };
        return (
          <div style={styleNews}>
            <Title_news></Title_news>
            <Card_news></Card_news>
          </div>
        );
    }
}

export default News;