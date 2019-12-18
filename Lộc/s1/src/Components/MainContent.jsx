import React, { Component } from "react";
import MainHeader from "./MainHeader";
import BlockCard from "./BlockCard";
class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="container" >
          <div className="row">
            <div className="col-md-12">
              <MainHeader />
            </div>
          </div>
          <br />
            <div className="row" style={{ background: "#6f6d7d8a"  ,borderTop: "10px solid #35efdda1", padding: " 20px 5px" }}>
            <div className="col-md-12" >
              <BlockCard
                image="https://thuthuatnhanh.com/wp-content/uploads/2018/07/hinh-anh-thien-nhien-phong-canh-dep-nhat.jpg"
                title="ẢNH TẢI HD 4K"
                comment="BBC Words in the News: BBC cho  bài viết được đính kèm tệp PDF và bản ghi âm để người đọc có thể tải xuống học miễn phí. Giống như News in Levels,"
              />
              <br />
              <BlockCard
                image="https://hinhnenall.com/wp-content/uploads/2019/06/tranh-phong-canh-dep.jpg"
                title="ẢNH TẢI TRÊN MẠNG"
                comment="BBC Words in the News: BBC vì mỗi bài viết được đính kèm tệp PDF và bản ghi âm để người đọc có thể tải xuống học miễn phí. Giống như News in Levels,"
              />
              <br />
              <BlockCard
                image="http://2.bp.blogspot.com/-Ct9Mq9JmE30/U0Km2-Hw5xI/AAAAAAAAF-E/CtQxg5dkCPc/s1600/anh-nen-may-tinh-hd-phong-canh-thien-nhien-dep-nhat-1.jpg"
                title="ẢNH ĐẸP 129"
                comment="BBC Words in the News: BBC bài viết được đính kèm tệp PDF và bản ghi âm để người đọc có thể tải xuống học miễn phí. Giống như News in Levels,"
              />
              <br />
              <BlockCard
                image="https://4.bp.blogspot.com/-Rl8oNheKV9o/WcEPPIGW54I/AAAAAAAArCs/1I2zDtBUTrcIeKS6C1cUVOtfzHDU1xsTACLcBGAs/s1600/Nature-Wallpaper-Posted-in-HD-%25C2%25B7-HD-Wallpaper-Nature.jpg"
                title="ẢNH GOOGLEAAA"
                comment="BBC Words in the News: BBC vì mỗi bài viết được đính kèm tệp PDF và bản ghi âm để người đọc có thể tải xuống học miễn phí. Giống như News in Levels,"
              />
              <br />
            </div>
            </div>
            </div>
      </>
    );
  }
}

export default MainContent;
