import React from 'react';
import FORM_TODO from './form_todo'
import LIST_TODO from './list_todo';
import axios from 'axios';


export class Content_todo extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: [],
            text: "",
            idUpdate: ""
        }
    }


    // get  data  
    componentDidMount() {
        axios.get(`https://5e05ffa88983960014ebed22.mockapi.io/todos`)
            .then(res => {
                const todos = res.data;
                this.setState({ todos });
            },
            )
    }

    addTaskClick = (e, name) => {
        axios.post('https://5e05ffa88983960014ebed22.mockapi.io/todos', {
            name: name,
        })
            .then((response) => {
                if (response.status === 201) {
                    this.setState({
                        todos: [{ id: response.data.id, name: response.data.name }, ...this.state.todos]
                    })
                }

            })
            .catch((error) => {
                console.log(error);
            });
    }

    deleteTaskClick = (e) => {
        axios.delete(`https://5e05ffa88983960014ebed22.mockapi.io/todos/` + e.target.dataset.idTask)
            .then(res => {
                console.log(res)
                if (res.status === 200) {
                    let indexRemove = this.state.todos.findIndex(todos =>
                        todos.id === res.data.id);
                    this.state.todos.splice(indexRemove, 1)
                    this.setState({})
                }

            },
            )
    }

    editTaskClick = (e) => {
        let indexEdit = this.state.todos.findIndex(todos =>
            todos.id === e.target.dataset.idTask);
        let newText = this.state.todos[indexEdit].name;
        this.setState({
            idUpdate: e.target.dataset.idTask,
            text: newText
        })
    }

    updateTask = (e, value) => {
        axios.put('https://5e05ffa88983960014ebed22.mockapi.io/todos/' + this.state.idUpdate, {
            name: value,
        })
            .then((response) => {
                if (response.status === 200) {
                    let indexUpdate = this.state.todos.findIndex(todos =>
                        todos.id === response.data.id);
                    let newDataUpdate = this.state.todos;
                    newDataUpdate[indexUpdate].name = value
                    this.setState({
                        text: "",
                        idUpdate: "",
                        todos: newDataUpdate
                    })
                }

            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <FORM_TODO text={this.state.text}
                    addTaskClick={this.addTaskClick}
                    updateTask={this.updateTask} />

                <LIST_TODO todos={this.state.todos}
                    deleteTaskClick={this.deleteTaskClick}
                    editTaskClick={this.editTaskClick}
                    text={this.state.text} />
            </div>
        );
    }
}

export default Content_todo;
