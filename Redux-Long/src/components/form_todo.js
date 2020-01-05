import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions/todos';

class FormTodo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text: ""
        }
    this.nameRef = React.createRef();
    }

    // handlerChange(e){
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     })
    // }

    clearStateName = ()=>{
        this.nameRef.current.value = ''
    }
    componentDidUpdate = () => {
        this.nameRef.current.value = this.props.input.name || ''
    }
    render(){
        return(
            <div>
               <form onSubmit={(e)=>{
                    this.props.handlerAddTodo(e, this.nameRef.current.value);
                    this.clearStateName();
                   }} className="form-inline">
                    <div className="form-group mx-sm-5 mb-2">
                        <input ref={this.nameRef} name="name" className="form-control" placeholder="name" />
                    </div>
                    <button type="submit" className="btn btn-primary mb-2">ADD</button>
                </form>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        handlerAddTodo: (e, text)=> {
            e.preventDefault();
            dispatch(addTodo(text));
        }
    }
}
const mapStateToProps = (state) => {
    return { input: state.input }
}
export default connect(mapStateToProps, mapDispatchToProps)(FormTodo);