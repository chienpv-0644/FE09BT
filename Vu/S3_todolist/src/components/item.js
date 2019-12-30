import React from 'react';

class Item extends React.Component {
    render() {
        const { todo, index, HandlerDelete, HandlerEdit } = this.props;
        return (
            <tr>
                <th>{ index + 1 }</th>
                <td>{ todo.name }</td>
                <td>
                    <button 
                        type="button" 
                        className="btn btn-outline-success ml-2"
                        onClick={ HandlerEdit }
                        id={ todo.id }
                    >Edit</button>
                    <button 
                        type="button" 
                        className="btn btn-outline-danger ml-2"
                        onClick={ HandlerDelete } 
                        id={ todo.id }
                    >Delete</button>
                </td>
            </tr>
        );
    }
}

export default Item;