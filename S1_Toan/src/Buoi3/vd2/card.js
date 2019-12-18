import React from 'react';
import Square from './square'
import Label from './label'
class Card extends React.Component {
    render(){
        //console.log(this.props)
        return(
            <div style={{margin:'20px'}}>
                <Square colorDisplay = {this.props.color}></Square>
                <Label colorDisplay = {this.props.color}></Label>
            </div>
        )
    }
}
export default Card;