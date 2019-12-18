
import React from 'react';


class FormRegister extends React.Component {
    render() {
      let bgColor = {
        backgroundColor: "#FF7E3D",
        color: "white",
        borderRadius: "3px",
        marginTop: "35px"
      }
      return(
        <div className="container" style= {bgColor}>
          {this.props.children}
        </div>
      ); 
    }
}

export default FormRegister;