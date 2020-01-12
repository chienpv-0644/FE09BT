import React from 'react';
import ShowProducts from './showProduct'
import CompareProducts from './compareProduct'

class CompareApp extends React.Component{
    render() {
        return (
            <div className="container py-5">
                <ShowProducts/>
                <CompareProducts/>
            </div>
        );
    }
}

export default CompareApp