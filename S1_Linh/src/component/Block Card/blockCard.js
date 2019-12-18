import React from 'react';
import CardImage from '../Card Image/cardImage'
import CardContent from '../Card Content/cardContent'

import './blockCard.css'

class BlockCard extends React.Component{
    render() {
        return (
            <div className="blockCard">
                <CardImage {...this.props}></CardImage>
                <CardContent {...this.props}></CardContent>
            </div>
        )
    }
}

export default BlockCard;