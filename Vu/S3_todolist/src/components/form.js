import React from 'react';

class AddForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            todoEditing: ''
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.onClear();
    }

    onClear = () => {
        this.setState({
            id: '',
            name: ''
        })
    }


    static getDerivedStateFromProps(nextProps, prevState){
        if (nextProps.todoEditing != prevState.todoEditing){
          return { 
                id: nextProps.id,
                name: nextProps.todoEditing,
                todoEditing: nextProps.todoEditing
           };
       }
       return null;
    }
    render() {
        return (
            <div className="container" onSubmit={ this.onSubmit }>
                <form className="form-inline">
                    <div className="form-group my-4 mr-2">
                        <input 
                            className="form-control"
                            type="text" 
                            name="name"
                            value={ this.state.name }
                            onChange={ this.onChange }
                        ></input>
                    </div>
                    <button 
                        type="submit" 
                        className="btn btn-outline-primary my-2"
                    >Submit</button>
                </form>
            </div>
        );
    }
}

export default AddForm;