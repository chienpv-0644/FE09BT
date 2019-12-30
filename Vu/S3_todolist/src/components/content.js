import React from 'react';
import AddForm from './form';
import List from './list';

class Content extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            todos: 
            [
                {
                    id: 1,
                    name: 'Học Bootstrap 4'
                },
                {
                    id: 2,
                    name: 'Học ReactJS'
                },
                {
                    id: 3,
                    name: 'Học Javascript'
                }
            ],
            todoEditing: '',
            id:''
        }
    }

    onSubmit = (data) => {
        let { todos } = this.state;

        if (data.id === '') {
            data.id = Date.now();
            todos.push(data);
            console.log(todos);
        } else {
            //Editing
            let index = todos.findIndex(item => item.id == data.id);
            todos[index] = data;
            console.log(data);
        }
        
        this.setState({
            todos: todos
        })
        localStorage.setItem('todos', JSON.stringify(todos))
    }

    componentDidMount () {
        if (localStorage && localStorage.getItem('todos')) {
            var todos = JSON.parse(localStorage.getItem('todos'))
            this.setState({
            todos: todos
            });
        }
    }

    HandlerDelete = (e) => {
        var { todos } = this.state;
        let id_todo = e.target.id;
        let index = todos.findIndex((item) => item.id == id_todo);
        todos.splice(index, 1);
        this.setState({
            todos: todos
        })
        localStorage.setItem('todos', JSON.stringify(todos))
    }
    
    HandlerEdit = (e) => {
        var { todos } = this.state;
        let id_todo = e.target.id;
        let index = todos.findIndex((item) => item.id == id_todo);
        let todoEditing = todos[index];
        this.setState({
            todoEditing: todoEditing.name,
            id: todoEditing.id
        })
    }
    render() {
        return (
            <div>
                <AddForm 
                    onSubmit={ this.onSubmit }
                    todoEditing={ this.state.todoEditing }
                    id={ this.state.id } />
                <List 
                    todo={ this.state.todos }
                    HandlerDelete={ this.HandlerDelete }
                    HandlerEdit={ this.HandlerEdit }/>
            </div>
        );
    }
}

export default Content;