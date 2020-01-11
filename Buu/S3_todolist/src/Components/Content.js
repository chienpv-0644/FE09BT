import React from "react";
import Form_Todo from "./Form_todo";
import List_todo from "./List_Todo";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, Name: "Learn HTML" },
        { id: 2, Name: "Learn CSS" },
        { id: 3, Name: "Learn Bootstrap" },
        { id: 4, Name: "Learn Javascript" },
        { id: 5, Name: "Learn React" }
      ],
      text: "",
      isEdit: -1
    };
    
    this.arrLength = this.state.todos.length;
  }

  handlerSubmit = (e, name) => {
    e.preventDefault();
    this.arrLength += 1;
    let todo = { id: this.arrLength, Name: name };
    this.setState({
      todos: [todo, ...this.state.todos]
    });
  };
  handlerDelete = id => {
    let arr = this.state.todos;
    let index = arr.findIndex(item => item.id);
    arr.splice(index, 1);
    this.setState({
      todos: arr
    });
  };
  handlerUpdate = (name) => {
      let arr = this.state.todos;
    let indexUpdate = arr.findIndex(
      item =>  item.id == this.state.isEdit
    );
    let itemEdit = { ...arr[indexUpdate]};
    itemEdit.Name = name;
    arr[indexUpdate] = itemEdit;
    this.setState({
      todos: [...arr],
      text: ""
    });
  };
  handlerEditTodos = (id,name) => {
    this.setState({
      text: name,
      isEdit: id
    });
  };
  render() {
    return (
      <div>
        <Form_Todo
          isEdit= {this.state.isEdit}
          text={this.state.text}
          handlerSubmit={this.handlerSubmit}
          handlerUpdate={this.handlerUpdate}
        />
        <List_todo
          {...this.state}
          handlerDelete={this.handlerDelete}
          handlerEditTodos={this.handlerEditTodos}
        />
      </div>
    );
  }
}

export default Content;
