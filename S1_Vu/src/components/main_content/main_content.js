import React from 'react';
import Main_header from './main_header';
import BorderTop from './borderTop';
import Block_card from './block_card';


class Main_content extends React.Component {
    render() {
        var styleMainContent = {
            width: "70%",
            margin: "2px 10px 10px 10px",
            // backgroundColor: "yellow"
        }
        return (
          <div style={styleMainContent}>
            <Main_header></Main_header>
            <BorderTop></BorderTop>
            <Block_card></Block_card>
          </div>
        );
    }
}

export default Main_content;