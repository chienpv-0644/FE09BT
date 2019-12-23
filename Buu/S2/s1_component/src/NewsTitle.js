import React from "react";

class NewsTitle extends React.Component {
  render() {
    let colorTitle = {
      backgroundColor: "#1c4067",
      color: "white",
      fontWeight: "700",
      marginTop: "30px",
      padding: "10px 20px 5px"
    };
    return (
      <div style={colorTitle}>
        <h4> {this.props.title}</h4>
      </div>
    );
  }
}

export default NewsTitle;
