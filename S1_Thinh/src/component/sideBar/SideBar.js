import React from 'react';
import RegisterForm from '../RegisterForm/RegisterForm'
import MiniContent from '../miniContent/MiniContent'
function SideBar(props) {
  return (
    <div style={{width:' 35%'}}>
        <RegisterForm/>
        <MiniContent>
          {props.children}
        </MiniContent>

    </div>
  );
}

export default SideBar;