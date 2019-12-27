import React from 'react';
import FormEnter from "../formEnter/formEnter";
import TodoList from "../todolist/todolist";

class Content extends React.Component{
    constructor(){
        super()
        this.state = {
            todos: [
                {id: 1, name: 'Learn English'},
                {id: 2, name: 'Go to school'},
                {id: 3, name: 'Play guitar'},
                {id: 4, name: 'Go to bed'},
            ],
            text: '',
            id: null
        }
    }
    handleOnClickAdd(name, id) {
        let arr = this.state.todos;
        let indexTodoEdit = arr.findIndex(item=> item.id == id);
        console.log('index',indexTodoEdit)
        if(indexTodoEdit != -1) {
            arr.splice(indexTodoEdit, 1, {id, name})
            this.setState({
                todos: arr
            })
        }
        else {
            let todo = {id: new Date().getTime(), name}
            this.setState(prevState => ({
                todos: [todo, ...prevState.todos]
            }))
        }

    }

    handleDelete(e) {
        let arr = this.state.todos;
        let idTodo = e.target.id;
        let index = arr.findIndex((item)=> item.id == idTodo)
         console.log('index:',index);
         arr.splice(index, 1)
         this.setState({
             todos: arr
         })
    }

    handleEdit(e) {
        console.log('id', e.target.id);
        let arr = this.state.todos;
        let todoEdit = arr.find(item=> item.id == e.target.id);
        this.setState({
            text: todoEdit.name,
            id: todoEdit.id
        })
    }

    render() {
        return (
            <>
                <FormEnter onClickButton={(name, id)=> this.handleOnClickAdd(name, id)} text={this.state.text} id={this.state.id}/>
                <TodoList todos={this.state.todos} handleDelete={this.handleDelete.bind(this)} handleEdit={this.handleEdit.bind(this)}/>
            </>

        );
    }
}

export default Content;