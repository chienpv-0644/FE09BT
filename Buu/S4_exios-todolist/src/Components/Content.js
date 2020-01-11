import React from "react";
import Form_Todo from "./Form_todo";
import List_todo from "./List_Todo";
import axios from "axios";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      text: "",
      isEdit: -1
    };

    this.arrLength = this.state.todos.length;
  }

  componentDidMount() {
    axios
      .get(`https://5e154b2ebce1d10014baf16a.mockapi.io/todos`)
      .then(res => {
        const todos = res.data;
        this.setState({ todos });
      })
      .catch(error => console.log(error));
  }

  handlerSubmit = (e, name) => {
    e.preventDefault();
    axios
      .post(`https://5e154b2ebce1d10014baf16a.mockapi.io/todos`, { name: name })
      .then(res => {
        console.log(res.data.id);
        if (res.status === 201) {
          this.setState({
            todos: [
              { id: res.data.id, name: res.data.name },
              ...this.state.todos
            ]
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  handlerDelete = id => {
    axios
      .delete(`https://5e154b2ebce1d10014baf16a.mockapi.io/todos/${id}`)
      .then(res => {
        console.log(res);
        let arr = this.state.todos;
        let index = arr.findIndex(item => item.id == res.data.id);
        arr.splice(index, 1);
        this.setState({
          todos: arr
        });
      });
  };

  handlerUpdate = name => {
    axios
      .put(
        "https://5e154b2ebce1d10014baf16a.mockapi.io/todos/" +
          this.state.isEdit,
        {
          name: name
        }
      )
      .then(response => {
        if (response.status === 200) {
          let indexUpdate = this.state.todos.findIndex(
            todos => todos.id === response.data.id
          );
          let newDataUpdate = this.state.todos;
          newDataUpdate[indexUpdate].name = name;
          this.setState({
            text: "",
            isEdit: "",
            todos: newDataUpdate
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  handlerEditTodos = (id, name) => {
    this.setState({
      text: name,
      isEdit: id
    });
  };

  render() {
    return (
      <div>
        <Form_Todo
          isEdit={this.state.isEdit}
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
