import React from 'react';
function Label(props){
    let letterStyle={
        border: '1px solid gray',
        margin: 0,
      backgroundColor: props.bgcolor
    }
    return (
      <p style={letterStyle}>
        {props.children}
      </p>
    )
  }
export default Label;