import React, { Component } from "react";
import Header from "./Header";
import BlockCard from "./BlockCard";
class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Header />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-12">
              <BlockCard
                image="https://sabe.io/tutorials/getting-started-with-react/hero.png"
                name="HƯỚNG DẪN HỌC REACTJS"
                comment="Hướng dẫn học React sao cho hiệu quả. Nếu bạn mới làm quen với React, React không khó chỉ có không biết dễ ở chỗ nào."
              />
              <br />
              <BlockCard
                image="https://tedu.com.vn//uploaded/images/news/062019/angular8.jpg"
                name="HƯỚNG DẪN HỌC ANGULARJS"
                comment="Hướng dẫn học Angular sao cho hiệu quả. Nếu bạn mới làm quen với Angular, Angular không khó chỉ có không biết dễ ở chỗ nào."
              />
              <br />
              <BlockCard
                image="https://techtalk.vn/wp-content/uploads/2019/01/laravel-696x387.jpg"
                name="HƯỚNG DẪN HỌC LARAVEL"
                comment="Hướng dẫn học Laravel sao cho hiệu quả. Nếu bạn mới làm quen với Laravel, Laravel không khó chỉ có không biết dễ ở chỗ nào."
              />
              <br />
              <BlockCard
                image="https://www.dammio.com/wp-content/uploads/2019/08/bootstrap-social.png"
                name="HƯỚNG DẪN HỌC BOOTSTRAP"
                comment="Hướng dẫn học Bootstrap sao cho hiệu quả. Nếu bạn mới làm quen với Bootstrap, Bootstrap không khó chỉ có không biết dễ ở chỗ nào."
              />
              <br />
              <BlockCard
                image="https://i.ytimg.com/vi/MM0oroNacUI/maxresdefault.jpg"
                name="HƯỚNG DẪN HỌC SCSS"
                comment="Hướng dẫn học SCSS sao cho hiệu quả. Nếu bạn mới làm quen với SCSS, SCSS không khó chỉ có không biết dễ ở chỗ nào."
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MainContent;
