import React from 'react';
import Card_image from './card_image';
import Card_content from './card_content';
import hinh1 from '../img/hinh1.jpg';
import hinh2 from '../img/hinh2.jpg';
import hinh3 from '../img/hinh3.jpg';
import hinh4 from '../img/hinh4.jpg';
import hinh5 from '../img/hinh5.jpg';

class Block_card extends React.Component {
    render () {
        var styleBlockCard = {
          width: '100%',
          margin: '0px 0px 2px 2px',
          display: 'flex',
          backgroundColor: "white"
        };

        return (
          <div>
            <div style={styleBlockCard}>
              <Card_image img={hinh1}></Card_image>
              <Card_content
                title="HƯỚNG DẪN HỌC REACT JS"
                posted="Posted by Nguyễn Nhân | Th12 18 2019 | Javascript. React | &hearts;&hearts;&hearts;&hearts;&hearts;"
                content="Hướng dẫn học React JS sao cho hiệu quả. Nếu bạn mới làm quen với React...."
              ></Card_content>
            </div>
            <div style={styleBlockCard}>
              <Card_image img={hinh2}></Card_image>
              <Card_content
                title="HƯỚNG DẪN CẤU TRÚC THƯ MỤC VÀ CÁCH VIẾT COMPONENT CHUẨN TRONG REACT"
                posted="Posted by Nguyễn Nhân | Th12 18 2019 | Javascript. Lập trình. Môi trường phát triển. React | &hearts;&hearts;&hearts;&hearts;&hearts;"
                content="Sau một thời gian tiềm hiểu và áp dụng rất hiệu quả. Hôm nay mình chia sẻ với các bạn cấu trúc thư...."
              ></Card_content>
            </div>
            <div style={styleBlockCard}>
              <Card_image img={hinh3}></Card_image>
              <Card_content
                title="HƯỚNG DẪN CÀI ĐẶT WEBPACK ĐỂ VIẾT REACTJS/ES6"
                posted="Posted by Nguyễn Nhân | Th12 18 2019 | Javascript. Lập trình. Môi trường phát triển. React | &hearts;&hearts;&hearts;&hearts;&hearts;"
                content="Trên trang chủ của Reactjs thì các mã ví dụ đều được viết bằng ES6, mặc dù viết bằng ES5..."
              ></Card_content>
            </div>
            <div style={styleBlockCard}>
              <Card_image img={hinh4}></Card_image>
              <Card_content
                title="HƯỚNG DẪN SỬ DỤNG REDUX HIỆU QUẢ TRONG REACT"
                posted="Posted by Nguyễn Nhân | Th12 18 2019 | Javascript. Lập trình. Môi trường phát triển. React. React Native | &hearts;&hearts;&hearts;&hearts;&hearts;"
                content="Câu hỏi: Khi nào thì nên sử dụng Application State (Redux storge), khi nào thì nên sử dụng Local...."
              ></Card_content>
            </div>
            <div style={styleBlockCard}>
              <Card_image img={hinh5}></Card_image>
              <Card_content
                title="VÒNG ĐỜI COMPONENT TRONG REACTJS VỚI ES6"
                posted="Posted by Nguyễn Nhân | Th12 18 2019 | Javascript. Lập trình. Môi trường phát triển. React. React Native | &hearts;&hearts;&hearts;&hearts;&hearts;"
                content="Có thể nói khái niệm Component trong React là một trong những thành phần quan trọng nhất của..."
              ></Card_content>
            </div>
          </div>
        );
    }
}

export default Block_card;
