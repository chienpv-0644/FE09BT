import React from 'react';

class BorderTop extends React.Component {
    render() {
        var styleBorderTop = {
            width: "100%",
            height: "5px",
            backgroundColor: "#1E90FF",
            margin: '0px 2px 0px 2px',
        }
        return (
            <div style={styleBorderTop}></div>
        )
    }
}

export default BorderTop;