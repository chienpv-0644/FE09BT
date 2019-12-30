import React from 'react';
import './TaskForm.css';


class TaskForm extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            // isDisplayForm: false,
            name: '',
            price: ''
        }
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;

        if (name === 'price') {
            value = parseInt(target.value)
        }
        
        this.setState({
            [name] : value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.onClear();
    }

    onClear = () => {
        this.setState({
            name: '',
            price: ''
        })
    }

  render () {
    
    return (
        <div className="TaskForm">
            <form onSubmit={ this.onSubmit }>
                <h3>NEW DISHS</h3>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Name Dishs"
                    value={ this.state.name }
                    onChange={ this.onChange }/><br/>
                <input 
                    type="number" 
                    name="price" 
                    placeholder="Price Dishs"
                    value={ this.state.price }
                    onChange={ this.onChange }
                /><br/>
                <button type="submit" >ADD DISHS</button>
            </form>
        </div>
    );
  };
}

export default TaskForm;
