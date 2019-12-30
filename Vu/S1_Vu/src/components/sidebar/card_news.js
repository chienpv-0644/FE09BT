import React from 'react';
import hinh6 from '../img/hinh6.jpg';
import hinh7 from '../img/hinh7.jpg';
import hinh8 from '../img/hinh8.jpg';
import hinh9 from '../img/hinh9.jpg';

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
                <img src={hinh6} style={styleImgNews} />
              </div>
              <div style={styleCardContent}>
                <a href="#" style={styleText}>
                  <h4>Hãy sẵn sàng với serveriess</h4>
                </a>
                <p style={styleText}>
                  Th12 18 2019 | Công nghệ. hệ điều hành. Máy chủ web. Môi
                  trường phát triển
                </p>
              </div>
            </div>
            <div style={styleCardNews}>
              <div style={styleCardImg}>
                <img src={hinh7} style={styleImgNews} />
              </div>
              <div style={styleCardContent}>
                <a href="#" style={styleText}>
                  <h4>Fullstack Station chuyển tên miền từ Business Card</h4>
                </a>
                <p style={styleText}>Th6 18 2019 | Giao lưu</p>
              </div>
            </div>
            <div style={styleCardNews}>
              <div style={styleCardImg}>
                <img src={hinh8} style={styleImgNews} />
              </div>
              <div style={styleCardContent}>
                <a href="#" style={styleText}>
                  <h4>Áp dụng các chiêu thức võ học vào lập trình</h4>
                </a>
                <p style={styleText}>Th6 18 2019 | Lập trình</p>
              </div>
            </div>
            <div style={styleCardNews}>
              <div style={styleCardImg}>
                <img src={hinh9} style={styleImgNews} />
              </div>
              <div style={styleCardContent}>
                <a href="#" style={styleText}>
                  <h4>
                    Kinh nghiệm dành cho người mới bắt đầu lập trình Python
                  </h4>
                </a>
                <p style={styleText}>
                  Th6 18 2019 | Lập trình. Môi trường phát triển Python
                </p>
              </div>
            </div>
          </div>
        );
    }
}

export default Card_news;