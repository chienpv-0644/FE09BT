import React from 'react';

class Search extends React.Component {
    constructor() {
        super()
        this.state = {
            text: ''
        }
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnKeyUp = this.handleOnKeyUp.bind(this);
    }

    handleOnChange(e) {
        this.setState({text: e.target.value})
    }

    handleOnKeyUp() {
        this.props.onKeyUp(this.state.text)
    }
    render() {
        return (
            <div className="col-md-5 form-inline">
                <input className="form-control w-auto ml-auto"
                       type="text"
                       placeholder="search"
                       value={this.state.text}
                       onChange={this.handleOnChange} onKeyUp={this.handleOnKeyUp}/>
            </div>
        )
    }
}

export default Search;