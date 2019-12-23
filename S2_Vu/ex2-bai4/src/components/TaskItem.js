import React from 'react';
import './TaskItem.css'


class TaskItem extends React.Component {
    onUpdate = (update) => {
        update = this.props.onUpdate(this.props.task);
        // this.setState({
        //     count: this.state.count + 1
        // })
        // count = this.props.onUpdate(this.state.count + 1);
    }
  render () {
      var { task, index } = this.props;
    return (
        <div className="taskItem">
            <table>
                <thead>
                    <tr>
                        <th className="stt">{ index + 1 }</th>
                        <th className="nameTask">{ task.name }</th>
                        <th className="priceTask">{ task.price }</th>
                        <th className="addToCart">
                            <button type="button" onClick={ this.onUpdate }>Add To Cart</button>
                        </th>
                    </tr>
                </thead>
            </table>
        </div>
    );
  };
}

export default TaskItem;
