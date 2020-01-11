import React from "react";

class Item extends React.Component {
  render() {
    let {id, Name} =  this.props.todo;
    return (
      <tr>
        <th scope="row">{this.props.index + 1}</th>
        <td>{Name}</td>
        <td>
          <button onClick={()=> this.props.handlerEditTodos(id,Name)} type="button" className="btn btn-outline-success btn-sm mr-3">
            Edit
          </button>
          <button id={id} onClick={()=> this.props.handlerDelete(id)}type="button" className="btn btn-outline-info btn-sm">
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default Item;
