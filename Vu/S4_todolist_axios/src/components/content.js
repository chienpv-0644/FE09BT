import React from 'react';
import AddForm from './form';
import List from './list';
import axios from  'axios';

class Content extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            todos: [],
            todoEditing: '',
            id_update:''
        }
    }

    onSubmit = (data) => {
        let { todos } = this.state;

        if (data.id === '') {
            let name = data.name;
            todos.push(data);
            axios.post('http://5e05ffa48983960014ebed1c.mockapi.io/todolist', { name })
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });
            
        } else {
            //Editing
            let index = todos.findIndex(item => item.id == data.id);
            todos[index] = data;
            let name = todos[index].name;
            console.log(todos[index]);
            axios.put(`http://5e05ffa48983960014ebed1c.mockapi.io/todolist/${this.state.id_update}`, { name })
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        
        this.setState({
            todos: todos
        })
    }

    componentDidMount(){
        axios.get('http://5e05ffa48983960014ebed1c.mockapi.io/todolist')
            .then((response) => {
                // handle success
                console.log(response);
                this.setState({
                    todos: response.data
                })
            })
            .catch((error) => {
                // handle error
                console.log(error);
            })
    }

    HandlerDelete = (e) => {
        var { todos } = this.state;
        let arr = this.state.todos;
        let id_todo = e.target.id;

        axios.delete(`http://5e05ffa48983960014ebed1c.mockapi.io/todolist/${id_todo}`)
            .then((response) =>{
                // handle success
                console.log(response);
                let index = arr.findIndex((item) => item.id == id_todo);
                    arr.splice(index, 1);
                    this.setState({
                        todos: arr
                    })
            })
            .catch((error) => {
                // handle error
                console.log(error);
            })
            console.log(id_todo);
    }
    
    HandlerEdit = (e) => {
        var { todos } = this.state;
        let id_todo = e.target.id;
        let index = todos.findIndex((item) => item.id == id_todo);
        let todoEditing = todos[index];
        this.setState({
            todoEditing: todoEditing.name,
            id_update: todoEditing.id
        })
    }
    render() {
        return (
            <div>
                <AddForm 
                    onSubmit={ this.onSubmit }
                    todoEditing={ this.state.todoEditing }
                    id={ this.state.id_update } />
                <List 
                    todo={ this.state.todos }
                    HandlerDelete={ this.HandlerDelete }
                    HandlerEdit={ this.HandlerEdit }/>
            </div>
        );
    }
}

export default Content;