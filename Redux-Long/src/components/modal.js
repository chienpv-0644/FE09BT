import React from 'react';
import ReactDOM from 'react-dom';

class Modal extends React.Component {
    constructor(){
        super();
        this.el = document.getElementById('modal')
    }
 render(){
     return ReactDOM.createPortal(
        this.props.children,
        this.el,
      );
 }
}

export default Modal;