import React, { Component } from 'react';
import newNews from './newNews.js';
import FormRegister from './FormRegister.js';
import './sideBar.css'

class SideBar extends Component {
    render() {
        return (
            <div className="sideBar">
                <div className="formRegister">
                    <FormRegister></FormRegister>
                    111331
                </div>
                <newNews></newNews>
            </div>
        );
    }
}

export default SideBar;