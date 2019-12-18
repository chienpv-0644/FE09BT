import React, { Component } from 'react';
import MainContent from './MainContent.js';
import SideBar from './SideBar.js';
import './main.css';

class MAIN extends Component {
    render() {
        return (
            <div className="main">
                <div className="mainContent">
                    <MainContent></MainContent>
                </div>
                <div className="sideBar">
                    <SideBar></SideBar>
                </div>

            </div>
        );
    }
}

export default MAIN;