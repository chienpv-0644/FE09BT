import React from 'react';
class Square extends React.Component {
    render(){
        console.log(this.props)
        let style = {
            width:'100px',
            height: '100px',
            backgroundColor:this.props.colorDisplay,
            border: 'solid 1px blue'
        }
        return(
            <div style = {style}></div>
        )
    }
}
export default Square;