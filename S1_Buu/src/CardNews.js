import React from 'react';


class CardNews extends React.Component {
    render() {
      return(
        <div>
          {this.props.children}
        </div>
      ); 
    }
}

export default CardNews;