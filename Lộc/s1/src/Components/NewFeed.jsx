import React, { Component } from "react";
import Title from "./Title";
import CardNewFeed from "./CardNewFeed";
class NewFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
            <div className="row" style={{ backgroundColor: "#8376cc", color: "#ffffff",padding: "10px 20px 5px" }}>
            <div className="col-md-12">
                    <Title/>
            </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <CardNewFeed
                    img="https://3.bp.blogspot.com/-xsZuDicfzh4/WMOQ3XxvCiI/AAAAAAAAARc/2Ikd337lOt46slTeB5WLvUo3Gl9EYAcIACLcB/s1600/mountain-wallpaper-2.jpg"
                    name="ẢNH TẢI HD 4K"
                    comment="Là chuỗi Workshop nghề 4.0 diễn ra tại Samsung 68 đã “bật mí” thành công tấm màn bí mật cho thế hệ trẻ" 
                    />
                    <CardNewFeed
                    img="https://3.bp.blogspot.com/-dms5ISukmY4/WMOQ1oBAnhI/AAAAAAAAAQ4/84FjqH5Xd1cetAKlBKV-2XBvQY19-VCAQCLcB/s1600/mountain-wallpaper-10.jpg"
                    name="ẢNH TẢI HD 4K"
                    comment="Là chuỗi Workshop nghề 4.0 diễn ra tại Samsung 68 đã “bật mí” thành công tấm màn bí mật cho thế hệ trẻ" 
                    />
                    <CardNewFeed
                    img="http://thuthuatphanmem.vn/uploads/2018/05/18/hinh-nen-full-hd-1080-anh-nang-long-lanh-tren-mat-nuoc_022853239.jpg"
                    name="ẢNH TẢI HD 4K"
                    comment="Là chuỗi Workshop nghề 4.0 diễn ra tại Samsung 68 đã “bật mí” thành công tấm màn bí mật cho thế hệ trẻ" 
                    />
                    <CardNewFeed
                    img="http://4.bp.blogspot.com/-jp9zXLelf5c/VABtRA61FfI/AAAAAAAADq8/uroFRU5NESs/s1600/Hinhnendl.com---Hinh-nen-khong-gian%2B(9).jpg"
                    name="ẢNH TẢI HD 4K"
                    comment="Là chuỗi Workshop nghề 4.0 diễn ra tại Samsung 68 đã “bật mí” thành công tấm màn bí mật cho thế hệ trẻ" 
                    />
                </div>
            </div>
      </>
    );
  }
}

export default NewFeed;
