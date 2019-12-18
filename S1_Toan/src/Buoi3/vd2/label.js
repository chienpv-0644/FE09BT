import React from 'react';
class Label extends React.Component {
    render(){
        let style = {
            width: '100px',
            border: 'solid 1px blue'
        }
        return(
    <div style = {style}>{this.props.colorDisplay}</div>
        )
    }
}
export default Label;