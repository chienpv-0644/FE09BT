import React from 'react';
import AppHeader from './app_header';
import Content from './content';

class TodosApp extends React.Component {
    render(){
        return(
            <div>
                <AppHeader/>
                <Content/>
            </div>
        )
    }
}

export default TodosApp;
