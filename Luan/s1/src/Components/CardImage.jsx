import React, { Component } from 'react';
class CardImage extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <>
            <div>
            <img style={{ width: 480, height: 200 }} src={this.props.image} alt="cc"/>
            </div>
            </>
        );
    }
}

export default CardImage;