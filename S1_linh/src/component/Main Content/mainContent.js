import React from 'react';
import MainTitle from "../Main Title/mainTitle";
import BlockCard from "../Block Card/blockCard";

class MainContent extends React.Component{
    render() {
        let contentCard = [
            {src: "https://picsum.photos/id/756/500/300", alt:"pic1", title:"Hướng dẫn học react JS.", author:"Nguyễn Nhân",date:"Th2 23, 2016", language:"Javascript, React", text:"Lorem ipsum dolor sit amet, consectetur sit amet, consectetur elit.Lorem , consectetur adipisicing elit."},
            {src: "https://picsum.photos/id/755/500/300", alt:"pic2", title:"Hướng dẫn cấu trúc thư mục và cách viết component chuẩn trong React", author:"Nguyễn Nhân",date:"Th2 23, 2016", language:"Javascript, React", text:"Lorem ipsum dolor sit amet, consectetur sit amet, consectetur elit.Lorem , consectetur adipisicing elit."},
            {src: "https://picsum.photos/id/767/500/300", alt:"pic3", title:"Hướng dẫn cài đăt webpack để viết Reactjs/es6", author:"Nguyễn Nhân",date:"Th2 23, 2016", language:"Javascript, React", text:"Lorem ipsum dolor sit amet, consectetur sit amet, consectetur elit.Lorem , consectetur adipisicing elit."},
            {src: "https://picsum.photos/id/768/500/300", alt:"pic4", title:"Hướng dẫn sử dụng redux hiệu quả trong ứng dụng react", author:"Nguyễn Nhân",date:"Th2 23, 2016", language:"Javascript, React", text:"Lorem ipsum dolor sit amet, consectetur sit amet, consectetur elit.Lorem , consectetur adipisicing elit."},
            {src: "https://picsum.photos/id/780/500/300", alt:"pic5", title:"Vòng đời của component trong reactjs với es6", author:"Nguyễn Nhân",date:"Th2 23, 2016", language:"Javascript, React", text:"Lorem ipsum dolor sit amet, consectetur sit amet, consectetur elit.Lorem , consectetur adipisicing elit."}
        ]
        let cardData = contentCard.map((item, index)=>
            <BlockCard key={`blockCard_${index}`} id={index} src={item.src} alt={item.alt} title={item.title} author={item.author} date={item.date} language={item.language} text={item.text}></BlockCard>
        )
        let title = "series: reactjs: từ cơ bản đến nâng cao";
        return (
            <div className="col-lg-9">
                <MainTitle title={title}></MainTitle>
                {cardData}
            </div>
        )
    }
}

export default MainContent;