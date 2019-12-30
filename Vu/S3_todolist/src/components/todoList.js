import React from 'react';
import AppHeader from './app-header';
import Content from './content';

class TodoList extends React.Component {
    render() {
        return (
            <div>
                <AppHeader/>
                <Content/>
            </div>
        );
    }
}

export default TodoList;