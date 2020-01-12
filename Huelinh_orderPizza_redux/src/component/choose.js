import React from 'react';
import Header from './header'
import Content from './content'

class Choose extends React.Component {
    render() {
        return (
            <div className="col-5">
                <Header/>
                <Content/>
            </div>
        )
    }
}

export default Choose