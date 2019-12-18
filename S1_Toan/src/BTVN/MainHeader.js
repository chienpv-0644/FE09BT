import React, { Component } from 'react';

class MainHeader extends Component {
    render() {
        return (
            <div className = "MainHeader">
                <h1>{this.props.mainHeader}</h1>
            </div>
        );
    }
}

export default MainHeader;