import React from "react";

class Form_Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      text: ""
    };
  }
  handlerChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  
  clearStateName = () => {
    this.setState({
      name: ""
    });
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.text !== nextProps.text) {
      return {
        text: nextProps.text,
        name: nextProps.text
      };
    } 
    return null;
  }

  render() {
    return (
      <form
        onSubmit={e => {
          if (this.props.text) {
            this.props.handlerUpdate(this.state.name);
            e.preventDefault();
          } else {
            this.props.handlerSubmit(e, this.state.name);
          }
          this.clearStateName();
        }}
      >
        <div className="input-group col-md-2">
          <input
            value={this.state.name}
            name="name"
            onChange={this.handlerChange}
            type="text"
            className="form-control"
            aria-label="Text input with segmented dropdown button"
          />
          <div className="input-group-append">
            <button type="submit" className="btn btn-outline-secondary">
              Add
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default Form_Todo;
