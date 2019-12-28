import React from 'react';
import FORM_TODO from './form_todo'
import LIST_TODO from './list_todo';


export class Content_todo extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: [
                { id: Date.now() + "1", name: "học HTML" },
                { id: Date.now() + "2", name: "học HTML2" },
                { id: Date.now() + "3", name: "học HTML1" },
            ],
            text: "",
            idUpdate: ""
        }
    }

    addTaskClick = (e, name) => {
        // this.state.todos.push(

        // )
        this.setState({
            todos: [{ id: Date.now().toString(), name: name },...this.state.todos]
        })
    }

    deleteTaskClick = (e) => {
        let indexRemove = this.state.todos.findIndex(todos =>
            todos.id === e.target.dataset.idTask);
        this.state.todos.splice(indexRemove, 1)
        this.setState({})
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
        let indexUpdate = this.state.todos.findIndex(todos =>
            todos.id === this.state.idUpdate);
        let newDataUpdate = this.state.todos;

        newDataUpdate[indexUpdate].name = value

        this.setState({
            text: "",
            idUpdate: "",
            todos: newDataUpdate
        })
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
