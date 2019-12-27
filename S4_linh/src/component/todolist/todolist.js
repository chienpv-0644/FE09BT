import React from 'react';
import Todo from '../todo/todo'

class TodoList extends React.Component{
    render() {
        let list = this.props.todos;
        let listTask = list.map((item, index)=>
            <Todo key={`todo_${index+1}`}
                  index={index + 1}
                  id={item.id}
                  name={item.name}
                  handleDelete={this.props.handleDelete}
                  handleEdit={this.props.handleEdit}
            ></Todo>
        )

        return (
            <table className="table table-striped mt-2">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listTask}
                </tbody>

            </table>
        );
    }
}

export default TodoList;