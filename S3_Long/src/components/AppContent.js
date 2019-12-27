import React from 'react';
import AddItem from './AddItem';
import TodoList from './TodoList';

class AppContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          todoItems: [{
            "id": 1,
            "name": "Gardy"
          }, {
            "id": 2,
            "name": "Mersey"
          }, {
            "id": 3,
            "name": "Coop"
          }, {
            "id": 4,
            "name": "Saba"
          }, {
            "id": 5,
            "name": "Sergio"
          }],
          recordEdit: 0,
          name: ''
        }
      }

    handleSubmit = (e, name) => {
      e.preventDefault()
      const { todoItems, recordEdit } = this.state
      if(recordEdit === 0){
        this.setState({
          todoItems: [
            {
              id: todoItems.length + 1,
              name
            },
            ...todoItems
          ],
          name: ''
        })        
      }
      else {
        const newItems = todoItems.map(item => {
          if(item.id === recordEdit) {
            return ({
              id: item.id,
              name
            })
          }
          else return item
        })
        this.setState({
          todoItems: newItems,
          name: '',
          recordEdit: 0
        })
      }
    }
    handleChange = (e) => {
      this.setState({
          name: e.target.value
      })
    }
    handleDelete = (e) => {
      const { todoItems } = this.state
      const newItems = todoItems
        .filter(item => item.id !== Number(e.target.id))
      this.setState({
        todoItems: newItems
      })
    }
    handleEdit = (e) => {
      const { todoItems, name } = this.state
      const selectItem = todoItems
        .filter(item => item.id === Number(e.target.id))
      this.setState({
        name: name ? name : selectItem[0].name,
        recordEdit: selectItem[0].id
      })
    }
    render() {
      const { name, recordEdit } = this.state
        return (
            <div>
                <AddItem name = {name}
                  handleChange={this.handleChange}
                  handleSubmit={this.handleSubmit}
                />
                <TodoList todoItems={this.state.todoItems}
                  handleDelete={this.handleDelete}
                  handleEdit={this.handleEdit}
                  recordEdit={recordEdit}
                />
            </div>
        )
    }
}

export default AppContent