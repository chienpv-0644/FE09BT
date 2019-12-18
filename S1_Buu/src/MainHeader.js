import React from 'react';


class MainHeader extends React.Component {
    render() {
      let header = {
        marginTop: "30px",
        textTransform: "uppercase",
        marginBottom: "10px"
      }
      return(
        <div style={header}>
          {this.props.children}
        </div>
      ); 
    }
}

export default MainHeader;
