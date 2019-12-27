import React from 'react'

class Hello extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-5 mx-auto text-center">
                        <h1> hello the word</h1>  <h1 className="text-danger">My name is {this.props.name}</h1>
                    </div>
                </div>
            </div>
        );
    }
}
export default Hello;