import React from 'react';
import Modal from './modal';
import ModalContent from './modal_content';
import {connect} from 'react-redux';
import {deleteTodos, editTodo} from '../actions/todos';

class Item extends React.Component {
    render(){
        // console.log(this.props);
        let {id, name} =  this.props.todo;
        return(
            <tr>
                <th>{this.props.index + 1}</th>
                <td>{name}</td>
                <td>
                    <button id={id} type="button" onClick={() => this.props.handlerEditTodo(id)} className="btn btn-outline-warning">Edit</button>
                    <button id={id} onClick={()=>this.props.handlerDeleteTodos(id)} type="button" className="btn btn-outline-danger">Delete</button>
                </td>
                <Modal>
                    <ModalContent todoname={name} index={this.props.index}/>
                </Modal>
            </tr>
        )
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        handlerDeleteTodos: (id)=>dispatch(deleteTodos(id)),
        handlerEditTodo: (id)=>dispatch(editTodo(id))
    }
}
export default connect(null, mapDispatchToProps)(Item);