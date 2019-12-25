import React from 'react';
import Title_news from './title_news';
import Card_news from './card_news';
import hinh6 from '../img/hinh6.jpg';
import hinh7 from '../img/hinh7.jpg';
import hinh8 from '../img/hinh8.jpg';
import hinh9 from '../img/hinh9.jpg';
import hinh10 from '../img/hinh10.jpg';

class News extends React.Component {
    render() {
        var styleNews = {
          width: '80%',
          padding: '2px 0px 0px 0px',
          margin: '20px 10px 10px 5px',
          
        };

        var arrNews = [
          {
            img: hinh6,
            title: 'Hãy sẵn sàng với serveriess',
            posted:
              'Th12 18 2019 | Công nghệ. hệ điều hành. Máy chủ web. Môi trường phát triển',
          },
          {
            img: hinh7,
            title: 'Fullstack Station chuyển tên miền từ Business Card',
            posted: 'Th6 18 2019 | Giao lưu',
          },
          {
            img: hinh8,
            title: 'Áp dụng các chiêu thức võ học vào lập trình',
            posted: 'Th8 20 2019 | Lập trình',
          },
          {
            img: hinh9,
            title: 'Kinh nghiệm dành cho người mới bắt đầu lập trình Python',
            posted: 'Th9 05 2019 | Lập trình. Môi trường phát triển Python',
          },
          {
            img: hinh10,
            title: 'Kinh nghiệm dành cho người mới bắt đầu lập trình React JS',
            posted: 'Th12 10 2019 | Lập trình. Môi trường phát triển React JS',
          },
        ];

        var dataNews = arrNews.map((item, index) => {
            return <Card_news 
                      key={`News_${index+1}`} 
                      img={item.img} 
                      title={item.title} 
                      posted={item.posted}
                    ></Card_news>
        });

        return (
          <div style={styleNews}>
            <Title_news></Title_news>
            {dataNews}
          </div>
        );
    }
}

export default News;