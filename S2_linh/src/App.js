import React from 'react';
import './App.css';
import Search from './component/search/search'
import Add from './component/add/add'
import Table from './component/table/table'

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            search: ''
        }
    }

    show(object) {
        this.setState(prevState => ({
            data: [...prevState.data, object]
        }))
    }

    search(text) {
        this.setState({ search: text});
    }

    renderSearchBar() {
        if(this.state.data.length !== 0) {
            return <Search onKeyUp={text => this.search(text)}></Search>
        }
    }

    render() {
      let foodArr = this.state.data, searchString = this.state.search.trim().toLowerCase();

      if (searchString.length > 0) {
            foodArr = foodArr.filter((e) => e.name.toLowerCase().match(searchString));
      }
      return (
          <div className="container mt-5">
              <div className="row">
                  <Add onSend={obj => this.show(obj)}></Add>
                  {this.renderSearchBar()}
              </div>
              <Table arr={foodArr}></Table>
          </div>

      );
  }
}

export default App;
