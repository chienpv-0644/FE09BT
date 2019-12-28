import React from 'react';
import ITEAM_TODO from './iteam_todo';

export class List_todo extends React.Component {
    render() {
        let listData = this.props.todos;
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Task</th>
                            <th scope="col">Acction</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listData.map((iteam, index) =>
                            <ITEAM_TODO key={"Iteam_todo" + index}
                                todo={iteam} index={index}
                                deleteTaskClick={this.props.deleteTaskClick}
                                editTaskClick={this.props.editTaskClick}
                                text={this.props.text} />)}
                    </tbody>
                </table>
            </div>
        );
    }
}
// getDeriverdStateFromProps
export default List_todo;
