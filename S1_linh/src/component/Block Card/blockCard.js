import React from 'react';
import CardImage from '../Card Image/cardImage'
import CardContent from '../Card Content/cardContent'

import './blockCard.css'

class BlockCard extends React.Component{
    constructor(props) {
        super(props);
        this.state= {class:"line"}
    }
    render() {
        let classes = (this.props.id === 0) ? "card line" : "card"
        return (
            <div className={classes}>
                {console.log(this.props.id)}
                <div className="row no-gutters">
                    <CardImage {...this.props}></CardImage>
                    <CardContent {...this.props}></CardContent>
                </div>
            </div>
        )
    }
}

export default BlockCard;