import React from 'react';

import './Search.css';


class Search extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      keyword: ''
    }
  }

  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value 
    })
  }

  onSearch = () => {
    this.props.onSearch(this.state.keyword);
    this.onClearKeyword();
  }

  onClearKeyword () {
    this.setState({
      keyword: ''
    })
  }

  render () {
    var { keyword } = this.state;
    return (
      <div className="AddSearch"> 
            <div className="Search"> 
                <input 
                  type="text" 
                  name="keyword" 
                  placeholder="search"
                  value={ keyword } 
                  onChange={ this.onChange } />
                <button 
                  className="btn" 
                  type="button"
                  onClick={ this.onSearch }>
                    <span className="fa fa-search"></span> SEARCH
                </button>
            </div>
      </div>
    );
  };
}

export default Search;
