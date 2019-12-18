import React from 'react';

class Hello extends React.Component {
    render() {
        return (
            <div>xin chao {this.props.name} {this.props.age}</div>
        )
    }
}
export default Hello;