import React from 'react';

class Todo extends React.Component{
    render() {
        return (
            <tr>
                <td>{this.props.index}</td>
                <td>{this.props.name}</td>
                <td>
                    <button id={this.props.id} className="btn btn-outline-warning" onClick={this.props.handleDelete}>delete</button>
                    <button id={this.props.id} className="btn btn-outline-danger ml-2" onClick={this.props.handleEdit}>edit</button>
                </td>
            </tr>
        );
    }
}

export default Todo;