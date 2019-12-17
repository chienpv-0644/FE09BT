import React from 'react';
import Label from './Label'
import Squery from './Squery'


function Letter(props){
    return (
      <div>
          <Squery bgcolor={props.color}></Squery>
          <Label bgcolor="#fff" >{props.color}</Label>
      </div>
   
    )
  }
export default Letter;