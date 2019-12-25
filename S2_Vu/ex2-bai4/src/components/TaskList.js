import React from 'react';
import Search from './Search';
import './TaskList.css';
import TaskItem from './TaskItem';


class TaskList extends React.Component {
  render () {
      var { tasks } = this.props;
      var elementTasks = tasks.map((task, index) => {
        return <TaskItem 
            key={index + 1} 
            index={index} 
            task={task} 
            onUpdate={ this.props.onUpdate }/>
    })
    return (
        <div className="TaskList">
            <div className="search">
                <div className="searchDishs">
                    <Search  onSearch={ this.props.onSearch }/>
                </div>
            </div>
            <div className="tasklists">
                { elementTasks }
            </div>
        </div>
    );
  };
}

export default TaskList;
