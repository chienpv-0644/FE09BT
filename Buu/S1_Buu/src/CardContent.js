
import React from 'react';


class CardContent extends React.Component {
    render() {
      return(
        <div>
           {this.props.children}
        </div>
      ); 
    }
}

export default CardContent;