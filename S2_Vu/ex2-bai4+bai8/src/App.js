import React from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      tasks :
      [
        {name: "Xôi gà", price: 10000},
        {name: "Bánh mì", price: 20000},
        {name: "Cơm vịt quay", price: 50000},
        {name: "Cơm heo quay", price: 45000},
        {name: "Cơm xườn", price: 50000},
        {name: "Phở bò", price: 60000},
        {name: "Phở gà", price: 55000},
        {name: "Bún bò", price: 45000},
        {name: "Bún giò", price: 45000},
        {name: "Bún đặc biệt", price: 60000}
      ],
      isDisplayForm : false,
      keyword: '',
      filter: {
        name: '',
        price: ''
      }
    };
  }

  componentDidMount () {
    if (localStorage && localStorage.getItem('tasks')) {
      var tasks = JSON.parse(localStorage.getItem('tasks'))
      this.setState({
        tasks: tasks
      });
    }
  }

  onToggleForm = () => {
    this.setState({
      isDisplayForm : !this.state.isDisplayForm
    })
  }

  onSubmit = (data) => {
    var { tasks } = this.state;
  
    tasks.push(data);
    this.setState({
      tasks : tasks
    })

    localStorage.setItem('tasks', JSON.stringify(tasks))

  }

  onSearch = (keyword) => {
    this.setState({
      keyword: keyword
    })
  }


  render () {
    var { tasks, isDisplayForm, keyword } = this.state;
    console.log(keyword);
    var elementTaskForm = isDisplayForm 
        ? <TaskForm onToggleForm={ this.props } onSubmit={ this.onSubmit } /> 
        : '';

        if (keyword) {
          tasks = tasks.filter((task) => {
            return task.name.toLowerCase().indexOf(keyword) !== -1;
          })
        }

    return (
      <div className="App">
        <div className="taskNew">
          { elementTaskForm }
        </div>
        <div className="taskLisk">
          <h3>MENU</h3>
          <div className="add">
              <button 
                type="button"  
                className="btn"
                onClick={ this.onToggleForm }>
                <span className="fa fa-plus"></span> ADD DISHS
              </button>
          </div>
          <div>
            <TaskList onSearch={ this.onSearch } tasks={ tasks }/>
          </div>
        </div>
        {/* <div className="yourCart">
          <h3>YOUR CART</h3>
          <div className="showCart">
            <YourCart onUpdate={ this.props.onUpdate }/>
          </div>
        </div> */}
      </div>
    );
  };
}

export default App;
