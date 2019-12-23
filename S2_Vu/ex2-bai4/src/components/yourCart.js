import React, { Component } from 'react';
import TaskItem from './TaskItem';

class YourCart extends Component {
    constructor (props) {
        super (props);
        this.state = {
            update: '',
            count : 0
        }
    }

    onUpdate = (update, count) => {
        count = this.state.count + 1;
        this.setState({
          update : update,
          count : count
        })
        console.log(update);
        console.log(count);
        // console.log(update.name + ' - ' + update.price + ' x ' + count); 
      }
    render() {
        var styleCart = {
            fontSize: '18px',
            fontWeight: '500'
        }

        return (
            <div style={styleCart}>{ this.props.onUpdate }</div>
        );
    }
}

export default YourCart;