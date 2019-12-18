import React from 'react';
import MainTitle from "../Main Title/mainTitle";
import BlockCard from "../Block Card/blockCard";
import LineSeparator from '../LineSeparator/lineSeparator'

import './mainContent.css'

class MainContent extends React.Component{
    render() {
        return (
            <div className="mainContent">
                <MainTitle title="series: reactjs: từ cơ bản đến nâng cao"></MainTitle>
                <LineSeparator></LineSeparator>
                <BlockCard src="https://picsum.photos/id/765/500/300" alt="pic1" title="Hướng dẫn học react JS." author="Nguyễn Nhân" date="Th2 23, 2016" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit."></BlockCard>
                <BlockCard src="https://picsum.photos/id/766/500/300" alt="pic1" title="Hướng dẫn cấu trúc thư mục và cách viết component chuẩn trong React" author="Nguyễn An" date="Th6 05, 2019" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit."></BlockCard>
                <BlockCard src="https://picsum.photos/id/767/500/300" alt="pic1" title="Hướng dẫn cài đăt webpack để viết Reactjs/es6" author="Trọng Hiếu" date="Th5 25, 2019" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit."></BlockCard>
                <BlockCard src="https://picsum.photos/id/768/500/300" alt="pic1" title="Hướng dẫn sử dụng redux hiệu quả trong ứng dụng react" author="Lê Hoa" date="Th2 23, 2016" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit."></BlockCard>
                <BlockCard src="https://picsum.photos/id/769/500/300" alt="pic1" title="Vòng đời của component trong reactjs với es6" author="Nguyễn Sơn" date="Th2 23, 2016" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit."></BlockCard>
            </div>
        )
    }
}

export default MainContent;