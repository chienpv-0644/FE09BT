import React from 'react';


export class Form_todo extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "",
            text: ""
        }
    }

    handlerChangeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    clearStateName = () => {
        this.setState({
            name: ""
        })
    }


    static getDerivedStateFromProps(nextProps, prevState) {
        console.log(prevState.text !== nextProps.text)
        if (prevState.text !== nextProps.text) {
            return {
                text: nextProps.text,
                name: nextProps.text
            };
        }

        return null;
    }

    render() {
        return (
            <div className="input-group col-xl-6 col-md-10 mx-auto my-5 justify-content-center">
                <div className="input-group-prepend d-none d-md-block">
                    <span className="input-group-text" id="">Add New Task</span>
                </div>

                <input type="text"
                    value={this.state.name}
                    name="name"
                    className="form-control"
                    onChange={this.handlerChangeInput}
                    placeholder="Add New Task"
                />

                <button type="button"
                    className="btn btn-outline-primary mx-3"
                    value={this.state.name}
                    onClick={(e) => {
                        if (this.props.text === "") {
                            this.props.addTaskClick(e, this.state.name);
                            this.clearStateName();
                        } else {
                            this.props.updateTask(e, this.state.name);
                        }
                    }}
                    disabled={this.state.name === "" ? true : false}>
                    {this.props.text === "" ? "Add task" : "Update task"}
                </button>
            </div>
        );
    }
}

export default Form_todo;
