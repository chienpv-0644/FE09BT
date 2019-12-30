import React from 'react';
import Main_header from './main_header';
import BorderTop from './borderTop';
import Block_card from './block_card';
import hinh1 from '../img/hinh1.jpg';
import hinh2 from '../img/hinh2.jpg';
import hinh3 from '../img/hinh3.jpg';
import hinh4 from '../img/hinh4.jpg';
import hinh5 from '../img/hinh5.jpg';


class Main_content extends React.Component {
      render() {
        var styleMainContent = {
            width: "70%",
            margin: "2px 10px 10px 10px",
            // backgroundColor: "yellow"
        }

        var arrBlockCard = [
          {
            img: hinh1,
            title: "HƯỚNG DẪN HỌC REACT JS",
            posted: "Posted by Nguyễn Nhân | Th12 18 2019 | Javascript. React | &hearts;&hearts;&hearts;&hearts;&hearts;",
            content: "Hướng dẫn học React JS sao cho hiệu quả. Nếu bạn mới làm quen với React...."
          },
          {
            img: hinh2,
            title: "HƯỚNG DẪN CẤU TRÚC THƯ MỤC VÀ CÁCH VIẾT COMPONENT CHUẨN TRONG REACT",
            posted: "Posted by Nguyễn Nhân | Th12 18 2019 | Javascript. Lập trình. Môi trường phát triển. React | &hearts;&hearts;&hearts;&hearts;&hearts;",
            content: "Sau một thời gian tìm hiểu và áp dụng rất hiệu quả. Hôm nay mình chia sẻ với các bạn cấu trúc thư...."
          },
          {
            img: hinh3,
            title: "HƯỚNG DẪN CÀI ĐẶT WEBPACK ĐỂ VIẾT REACTJS/ES6",
            posted: "Posted by Nguyễn Nhân | Th12 18 2019 | Javascript. Lập trình. Môi trường phát triển. React | &hearts;&hearts;&hearts;&hearts;&hearts;",
            content: "Trên trang chủ của Reactjs thì các mã ví dụ đều được viết bằng ES6, mặc dù viết bằng ES5..."
          },
          {
            img: hinh4,
            title: "HƯỚNG DẪN SỬ DỤNG REDUX HIỆU QUẢ TRONG REACT",
            posted: "Posted by Nguyễn Nhân | Th12 18 2019 | Javascript. Lập trình. Môi trường phát triển. React. React Native | &hearts;&hearts;&hearts;&hearts;&hearts;",
            content: "Câu hỏi: Khi nào thì nên sử dụng Application State (Redux storge), khi nào thì nên sử dụng Local...."
          },
          {
            img: hinh5,
            title: "VÒNG ĐỜI COMPONENT TRONG REACTJS VỚI ES6",
            posted: "Posted by Nguyễn Nhân | Th12 18 2019 | Javascript. Lập trình. Môi trường phát triển. React. React Native | &hearts;&hearts;&hearts;&hearts;&hearts;",
            content: "Có thể nói khái niệm Component trong React là một trong những thành phần quan trọng nhất của..."
          }
        ];

        var dataBlockCard = arrBlockCard.map((item, index) => {
                  return <Block_card
                              key={`blockCard_${index+1}`} 
                              img={item.img}
                              title={item.title}
                              posted={item.posted}
                              content={item.content}
                        ></Block_card>
              });

        return (
          <div style={styleMainContent}>
            <Main_header></Main_header>
            <BorderTop></BorderTop>
            {dataBlockCard}
          </div>
        );
    }
}

export default Main_content;