import React from 'react';

export class Iteam_todo extends React.Component {
    render() {
        let { id, name } = this.props.todo;
        return (
            <tr>
                <th scope="row">{this.props.index + 1}</th>
                <td>{name}</td>
                <td>
                    <button type="button"
                        className="btn btn-outline-primary mx-1"
                        data-id-task={id}
                        onClick={this.props.editTaskClick}>Edit</button>
                    <button type="button"
                        className="btn btn-outline-danger mx-1"
                        data-id-task={id}
                        onClick={this.props.deleteTaskClick}
                        disabled={this.props.text === "" ? false : true}>Delete</button>
                </td>
            </tr>
        );
    }
}

export default Iteam_todo;
