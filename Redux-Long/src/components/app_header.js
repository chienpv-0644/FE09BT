import React from 'react';

class AppHeader extends React.Component {
    render(){
        return(
            <div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">TODO LIST APP</h1>
                        <p className="lead">App management todos</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default AppHeader;