import React from 'react';
import FormRegister from './FormRegister';
import NewNews from './NewNews';

class SideBar extends React.Component {
    render() {
      let size = {
        fontSize: "16px"
      }
      let styleButton = {
          padding:"10px 0px",
          textAlign: "center",
          width: "90%", 
          backgroundColor: "#2f6094",
          color: "white"
      }
      let styleButton1 = {
        width: "90%",
        padding:"10px", 
        backgroundColor: "white",
        color: "#FF7E3D"
    }
      return(
        <div>
            <FormRegister>
              <div className="row text-center">
                <div className="col-md-12"><h3 className="my-3 mx-4 font-weight-bold"> ĐĂNG KÍ NHẬN BÀI VIẾT MỚI</h3></div>
                <div className="col-md-12">
                  <p style={size} className="mx-3"> Công nghệ đang thay đổi nhanh chóng hãy cùng vươn ra thế  giới với những bài viết  chất lượng từ FullStack Station bạn nhé</p>
                </div>
                <div className="col-md-12">
                <button type="button" className="btn" style={styleButton}> TÊN CỦA BẠN </button> 
                </div>
                <div className="col-md-12">
                <button type="button" className="btn mt-3 mb-3"style={styleButton} > EMAIL CỦA BẠN </button> 
                </div>
                <div className="col-md-12">
                <div className="custom-control custom-checkbox ml-2">
                 <input type="checkbox" class="custom-control-input" id="defaultUnchecked"/>
                   <label class="custom-control-label" for="defaultUnchecked">Tôi đồng ý với điều khoản và điều kiện</label>
                    </div>
                </div>
                <div className="col-md-12">
                <button type="button" className="btn mx-3 my-3" style={styleButton1} > ĐĂNG KÝ </button> 
                </div>
                <div className="col-md-12">
                  <p style={size} className="mx-3">Bạn sẽ nhận được Email thông báo khi có bài viết mới ,mình không spam vì mình cũng rất ghét :))</p>
                </div>
              </div>
            </FormRegister>
            <NewNews> </NewNews>
        </div>
      ); 
    }
}

export default SideBar;