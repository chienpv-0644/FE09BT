import React from 'react';
function Squery(props){
    let letterStyle={
        width:80,
        height:80,
        backgroundColor: props.bgcolor
    }
    return (
      <div style={letterStyle}>
        {props.children}
      </div>
    )
  }
export default Squery;