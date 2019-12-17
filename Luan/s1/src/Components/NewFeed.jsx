import React, { Component } from 'react';
import Title from './Title';
import CardSmall from './CardSmall';
class NewFeed extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Title/>
                    </div>
                </div>
                <br/>
                <div className="row">
                <div className="col-md-12">
                        <CardSmall 
                        image = "https://didongviet.vn//pub/media/catalog/product/i/p/iphone-11-pro-max-64gb-didongviet_2.jpg"
                        title = "Can't React hook all 140 HTML color names ?"
                        comment = "Curious React hook components explicitly require jQuery, our JS, and Popper JS ?. Click the show components link below."
                        />
                        <CardSmall
                        image = "https://didongviet.vn/pub/media/catalog/product//i/p/iphone-11-256gb-didongviet_2.jpg"
                        title = "Can't Redux Thunk all 140 HTML color names ?"
                        comment = "Curious Redux Thunk components explicitly require jQuery, our JS, and Popper JS ?. Click the show components link below."
                        />
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default NewFeed;