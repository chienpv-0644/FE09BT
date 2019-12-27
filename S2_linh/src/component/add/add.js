import React from 'react';

class Add extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            price: ''
        }
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleAddButton = this.handleAddButton.bind(this);
        this.resetInputFields = this.resetInputFields.bind(this);
    }

    handleOnChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    resetInputFields() {
        this.setState({name: '', price: ''});
    }

    handleAddButton() {
        this.props.onSend({ id: new Date().getTime(), name: this.state.name, price: this.state.price });
        this.resetInputFields();
        this.nameInput.focus();
    }
    render() {
        return (
            <div className="col-md-7 form-inline">
                <input className="form-control w-auto mr-2"
                       name="name"
                       type="text"
                       placeholder="Name"
                       ref={(input) => { this.nameInput = input; }}
                       value={this.state.name}
                       onChange={this.handleOnChange}/>
                <input className="form-control w-auto mr-2"
                       name="price"
                       type="text"
                       placeholder="Price"
                       value={this.state.price}
                       onChange={this.handleOnChange}/>
                <button className="btn btn-secondary" onClick={this.handleAddButton}>Add</button>
            </div>
        )
    }
}

export default Add;