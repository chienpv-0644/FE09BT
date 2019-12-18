import React from 'react';


class NewsTitle extends React.Component {
    render() {
      let colorTitle= {
        backgroundColor: "#1c4067",
        color: "white",
        fontWeight: "700",
        marginTop: "30px",
        padding: "10px 20px 5px",
        
      }
      return(
        <div style={colorTitle}>
          {this.props.children}
        </div>
      ); 
    }
}

export default NewsTitle;