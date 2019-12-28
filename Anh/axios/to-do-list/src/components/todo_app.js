import React from 'react';
import TODO_HEADER from './todo_header'
import CONTENT_TODO from './content_todo'

export class Todo_app extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center my-2">
                        <TODO_HEADER />
                    </div>
                    <div className="col-12 text-center my-2">
                        <CONTENT_TODO />
                    </div>
                </div>
            </div>
        );
    }
}

export default Todo_app;
