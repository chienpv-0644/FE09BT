import React from 'react';


class Form_register extends React.Component {
    render() {
        var styleFormRegister = {
            width: "80%",
            padding: "2px 0px 0px 0px",
            backgroundColor: "#FF6600 ",
            margin: "20px 10px 10px 5px",
            textAlign: "center"
        };

        var styleTitleForm = {
            textAlign: "center",
            color: "white"
        };
        
        var styleInput = {
            width: "80%",
            textAlign: "center",
            color: "white",
            fontWeight: 700,
            fontSize: "14px",
            padding: "10px 10px 10px 10px",
            margin: "5px auto",
            backgroundColor: "#CC0000"
        };

        var styleRegister = {
            width: "85%",
            backgroundColor: "white",
            color: "#FF6600",
            fontSize: "14px",
            fontWeight: 700,
            padding: "10px 10px 10px 10px",
            margin: "10px 0px 10px 0px"
        };

        var styleCheckbox = {
            width: "100%",
            color: "white",
            // margin: "10px 0px 20px 0px",
            padding: "20px 10px 80px 10px"
        };

        return (
          <div style={styleFormRegister}>
            <h3 style={styleTitleForm}>ĐĂNG KÝ NHẬN BÀI VIẾT MỚI</h3>
            <p style={styleTitleForm}>
              Công nghệ đang thay đổi nhanh chóng hãy cùng vươn ra thế giới với
              những bài viết chất lượng từ FullStack Station bạn nhé.
            </p>
            <input
              type="text"
              style={styleInput}
              placeholder="TÊN CỦA BẠN"
            ></input>
            <input
              type="email"
              style={styleInput}
              placeholder="EMAIL CỦA BẠN"
            ></input>
            <br></br>
            <input type="checkbox"></input>
            <span style={styleCheckbox}>
              I comment to my submitted data being collected "this form"
            </span>
            <br></br>
            <input type="button" style={styleRegister} value="ĐĂNG KÝ"></input>
            <p style={styleCheckbox}>
              Bạn sẽ nhận được email khi có bài viết mới, mình không spam
            </p>
          </div>
        );
    }
}

export default Form_register;