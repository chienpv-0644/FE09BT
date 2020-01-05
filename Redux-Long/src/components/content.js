import React from 'react';
import FormTodo from './form_todo';
import ListTodos from './list_todos';
import axios from 'axios';
import {connect} from 'react-redux';

class Content extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            todos: [],
            text: "sdsd"
        }
        console.log(this.props)
     this.arrlength = this.state.todos.length;
    }

    handlerSubmit(e, name){
        e.preventDefault();
        this.arrlength += 1
        let todo = {id: this.arrlength, name}
        this.setState({
            todos: [todo,...this.state.todos]
        })
    }

    render(){
        
        return(
            <div>
                <FormTodo text={this.state.text} handlerSubmit={this.handlerSubmit.bind(this)} />
                <ListTodos/>
            </div>
        )
    }
}


export default Content;