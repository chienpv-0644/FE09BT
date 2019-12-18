import React, { Component } from "react";
class FormRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="row text-center"style={{ backgroundColor: "#0014ff4f" ,padding: "10px 20px 5px"}}>
        <div className="col-md-12">
          <h3 className="my-3 mx-4 font-weight-bold">
            ĐĂNG KÍ NHẬN BÀI VIẾT MỚI
          </h3>
        </div>
        <div className="col-md-12">
          <p className="mx-3">
            Công nghệ đang thay đổi nhanh chóng hãy cùng vươn ra thế giới với
            những bài viết chất lượng từ FullStack Station bạn nhé
          </p>
        </div>
        
        <input
          type="text"
          className="form-control"
          aria-describedby="emailHelp"
          placeholder="Tên của bạn"
        />
        <br/>
        <input
          type="text"
          className="form-control"
          aria-describedby="emailHelp"
          placeholder="Email của bạn"
        />
        <div className="col-md-12">
          <div className="custom-control custom-checkbox ml-2">
            <input type="checkbox" className="custom-control-input" />
            <label class="custom-control-label">
              Tôi đồng ý với các điều khoản trên và submit lên data của form
            </label>
          </div>
        </div>
        <div className="col-md-12">
          <button type="button" className="btn mx-3 my-3">
            ĐĂNG KÝ
          </button>
        </div>
        <div className="col-md-12">
          <p className="mx-3">
            Bạn sẽ nhận được Email thông báo khi có bài viết mới ,mình không
            spam vì mình cũng rất ghét :))
          </p>
        </div>
      </div>
    );
  }
}

export default FormRegister;
