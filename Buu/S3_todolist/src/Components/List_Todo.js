import React from "react";
import Item from "./Item";

class List_todo extends React.Component {
  render() { 
    let listDatas = this.props.todos.map((todo, index)=>{
      return <Item handlerDelete= {this.props.handlerDelete} handlerEditTodos={this.props.handlerEditTodos} index={index} key={index} todo={todo}/>
  })
    return (
      <div className="col-md-7 mt-3">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>{listDatas}</tbody>
        </table>
      </div>
    );
  }
}

export default List_todo;
