import React from 'react';

class FormEnter extends React.Component{
    constructor(){
        super()
        this.state = {
            name: '',
            text: '',
            id: null
        }
    }

    static getDerivedStateFromProps(props, state) {
        if(props.text != state.text) {
            return {
                name: props.text,
                text: props.text,
                id: props.id
            }
        }
        return null
    }

    handleOnChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    resetInputFields() {
        this.setState({
            name: ''
        });
    }

    handleOnClick() {
        this.props.onClickButton(this.state.name, this.state.id);
        this.resetInputFields();
        this.nameInput.focus();
    }

    render() {
        return (
            <div className="form-inline">
                <input name="name" className="form-control w-auto"
                       placeholder="Enter task here"
                       type="text"
                       value={this.state.name}
                       onChange={this.handleOnChange.bind(this)}
                       ref={input => {this.nameInput = input}}/>
                <button className="btn btn-primary ml-2" onClick={this.handleOnClick.bind(this)}>Add</button>
            </div>
        );
    }
}

export default FormEnter;