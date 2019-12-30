import React from 'react';
import Item from './item';

class List extends React.Component {
    render() {
        let { todo, HandlerDelete, HandlerEdit } = this.props;
        let listData = todo.map((todo, index) => {
            return <Item 
                key={ index } 
                index={ index } 
                todo={ todo }
                HandlerDelete={ HandlerDelete } 
                HandlerEdit={ HandlerEdit }
                />
        })
        return (
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">STT</th>
                            <th scope="col">Name</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { listData }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default List;