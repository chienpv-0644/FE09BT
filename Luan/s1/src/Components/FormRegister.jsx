import React, { Component } from "react";
class FormRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <br />
        <form>
          <h5>
            <b>ĐĂNG KÍ NHẬN BÀI VIẾT MỚI</b>
          </h5>
          <br />
          <p>
            Công nghệ đang thay đổi nhanh chóng, hãy cùng nhau vươn ra thế giới
            với những bài viết chất lượng fullstack. Try React. Online
            Playgrounds. If you're interested in playing around with React, you
            can use an online code playground.
          </p>
          <br />
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Tên của bạn"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Email của bạn"
            />
            <br />
            <div className="form-check">
              <input type="checkbox" className="form-check-input" />
              In this guide, we will examine the building blocks of React apps:
              elements and ... knowledge level and enable you to follow along
              this guide without getting lost.
            </div>
          </div>
          <button className="btn btn-primary btn-lg">Đăng ký</button>
          <br/>
          <br/>
          <p>
            In this guide, we will examine the building blocks of React apps:
            elements and
          </p>
        </form>
      </>
    );
  }
}

export default FormRegister;
