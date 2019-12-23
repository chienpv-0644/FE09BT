
import React from 'react';


class CardImages extends React.Component {
    render() {
      let space = {
        padding: "20px",
        
      }
      return(
        <div style={space}>
          {this.props.children}
        </div>
      ); 
    }
}

export default CardImages;