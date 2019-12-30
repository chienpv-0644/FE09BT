import React from 'react';
import Form_register from './form_register';
import News from './news';

class Sidebar extends React.Component {
    render() {
        var styleSidebar = {
            width: "30%",
            margin: "2px 10px 10px 10px",
            // backgroundColor: "pink"
        }
        return (
            <div style={styleSidebar}>
                <Form_register></Form_register>
                <News></News>
            </div>
        )
    }
}

export default Sidebar;