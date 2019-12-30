import React from 'react';

class YourCart extends React.Component {
    render() {
        var styleCart = {
            fontSize: '18px',
            fontWeight: '500'
        }
        var { list } = this.props;

        return (
            <div style={styleCart}>
                <p>{ list[0] + ' - ' + list[1] + ' VND.' + ' x ' + list[2] + ' part' }</p>
            </div>
        );
    }
}

export default YourCart;