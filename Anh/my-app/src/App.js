import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/hello.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import ElementOfList from './components/elementOfList'
import ShowComment from './components/showComment'

function App() {
  let arrayShowComment = [{
    linkImage: "https://www.w3schools.com/html/pic_trulli.jpg",
    contentPost: "thank pro Cảm ơn đã Chia sẽ Hihi1"
  }, {
    linkImage: "https://www.w3schools.com/html/pic_trulli.jpg",
    contentPost: "thank pro Cảm ơn đã Chia sẽ Hihi2"
  }, {
    linkImage: "https://www.w3schools.com/html/pic_trulli.jpg",
    contentPost: "thank pro Cảm ơn đã Chia sẽ Hihi3"
  }, {
    linkImage: "https://www.w3schools.com/html/pic_trulli.jpg",
    contentPost: "thank pro Cảm ơn đã Chia sẽ Hihi4"
  }, {
    linkImage: "https://www.w3schools.com/html/pic_trulli.jpg",
    contentPost: "thank pro Cảm ơn đã Chia sẽ Hihi5"
  }];
  let arrayElementOfList = [
    {
      titleOfContent: "HƯỚNG DẪN CẤU TRÚC THƯ MỤC VÀ CÁCH VIẾT COMPOMENT CHUẨN TRONG REACT",
      linkImage: "https://www.w3schools.com/html/pic_trulli.jpg",
      nameAuthor: "Nguyễn Nhân",
      timePost: "Th5 7,2016",
      introduceContent: "Lập trình, môi Trường Phát Triển js",
      poinOfPost: "3.5",
      contentPost: "Props là những thuộc tính mà ta truyền vào cho Component. Hay tưởng tượng Component là một thẻ HTML thì props chính là các thuộc tính (như: id, style, class, onclick, ...) được truyền vào thẻ đó."
    },
    {
      titleOfContent: "HƯỚNG DẪN CẤU TRÚC THƯ MỤC VÀ CÁCH VIẾT COMPOMENT CHUẨN TRONG REACT",
      linkImage: "https://www.w3schools.com/html/pic_trulli.jpg",
      nameAuthor: "Nguyễn Nhân",
      timePost: "Th5 7,2016",
      introduceContent: "Lập trình, môi Trường Phát Triển js",
      poinOfPost: "3.5",
      contentPost: "Props là những thuộc tính mà ta truyền vào cho Component. Hay tưởng tượng Component là một thẻ HTML thì props chính là các thuộc tính (như: id, style, class, onclick, ...) được truyền vào thẻ đó."
    },
    {
      titleOfContent: "HƯỚNG DẪN CẤU TRÚC THƯ MỤC VÀ CÁCH VIẾT COMPOMENT CHUẨN TRONG REACT",
      linkImage: "https://www.w3schools.com/html/pic_trulli.jpg",
      nameAuthor: "Nguyễn Nhân",
      timePost: "Th5 7,2016",
      introduceContent: "Lập trình, môi Trường Phát Triển js",
      poinOfPost: "3.5",
      contentPost: "Props là những thuộc tính mà ta truyền vào cho Component. Hay tưởng tượng Component là một thẻ HTML thì props chính là các thuộc tính (như: id, style, class, onclick, ...) được truyền vào thẻ đó."
    },
    {
      titleOfContent: "HƯỚNG DẪN CẤU TRÚC THƯ MỤC VÀ CÁCH VIẾT COMPOMENT CHUẨN TRONG REACT",
      linkImage: "https://www.w3schools.com/html/pic_trulli.jpg",
      nameAuthor: "Nguyễn Nhân",
      timePost: "Th5 7,2016",
      introduceContent: "Lập trình, môi Trường Phát Triển js",
      poinOfPost: "3.5",
      contentPost: "Props là những thuộc tính mà ta truyền vào cho Component. Hay tưởng tượng Component là một thẻ HTML thì props chính là các thuộc tính (như: id, style, class, onclick, ...) được truyền vào thẻ đó."
    },
    {
      titleOfContent: "HƯỚNG DẪN CẤU TRÚC THƯ MỤC VÀ CÁCH VIẾT COMPOMENT CHUẨN TRONG REACT",
      linkImage: "https://www.w3schools.com/html/pic_trulli.jpg",
      nameAuthor: "Nguyễn Nhân",
      timePost: "Th5 7,2016",
      introduceContent: "Lập trình, môi Trường Phát Triển js",
      poinOfPost: "3.5",
      contentPost: "Props là những thuộc tính mà ta truyền vào cho Component. Hay tưởng tượng Component là một thẻ HTML thì props chính là các thuộc tính (như: id, style, class, onclick, ...) được truyền vào thẻ đó."
    }
  ];
  return (
    <div className="container my-3">
      <div className="row ">
        {/* center */}
        <div className="col-8">
          <div className="">
            <h4 className="text-uppercase border-bottom-3 p-3 pb-0 mb-0 border-primary ">
              <strong>series: react js: từ cơ bản đến nâng cao</strong>
            </h4>
          </div>
          {arrayElementOfList.map((element, index) =>
            <ElementOfList
            key ={ElementOfList+index}
            titleOfContent ={element.titleOfContent}
            linkImage={element.linkImage}
            nameAuthor={element.nameAuthor}
            timePost={element.timePost}
            introduceContent={element.introduceContent}
            poinOfPost={element.poinOfPost}
            contentPost={element.contentPost}
            ></ElementOfList>)
          }
        </div>
        {/* menu right */}
        <div className="col-4 text-center">
          <div className="top-right my-0 bg-white p-3">
            <h4 className="text-uppercase">
              Đăng ký nhận Bài
            </h4>
            <button className="btn btn-default w-75 my-2 bg-dark" style={{ opacity: 0.3 }}>
              <strong className="text-white">Tên Của Bạn</strong>
            </button>
            <button className="btn btn-default w-75  my-2 bg-dark" style={{ opacity: 0.3 }}>
              <strong className="text-white">EMAIL Cảu Bạn</strong>
            </button>
            <p>
              Dễ dàng cho phép khách truy cập đăng ký theo dõi tất cả các bài viết của bạn qua email, thông qua một widget trên sidebar blog. Mỗi khi bạn đăng tải một bài viết mới, WordPress.com sẽ tự động gửi email thông báo cho tất cả các thuê bao đã đăng ký.
              Khi gửi bình luận, khách truy cập của bạn cũng có thể đăng ký để theo dõi các bình luận tiếp theo trong bài viết.
            </p>
            <button className="btn btn-default w-75  my-2 bg-dark" style={{ opacity: 0.3 }}>
              <strong className="text-white">Đăng Ký</strong>
            </button>
          </div>
          <div className="bot-right mt-4 p-3">
            <div className="text-left p-2 bg-secondary text-white ">
              <h6 className="p-0 m-0"><strong>Bài Viết Mới</strong></h6>
            </div>
            {arrayShowComment.map((element, index) =>
              <ShowComment
                key={ShowComment + index}
                linkImage={element.linkImage}
                contentPost={element.contentPost}
              ></ShowComment>
            )}
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
