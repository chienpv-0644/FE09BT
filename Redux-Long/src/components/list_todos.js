import React from 'react';
import Item from './item';
import {connect} from 'react-redux';


class ListTodos extends React.Component {
    render(){
        let listDatas = this.props.todos.map((todo, index)=>{
            return <Item handlerDelete={this.props.handlerDelete} index={index} key={index} todo={todo}/>
        })
        return(
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listDatas}
                    </tbody>
                </table>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        todos: state.todos,
        checked: state.input
    }
}
export default connect(mapStateToProps)(ListTodos);