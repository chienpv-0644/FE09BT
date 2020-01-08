import React from 'react'
import { Row, Col } from 'antd'
import { connect } from 'react-redux'
import Item from './components/Item'
import 'antd/dist/antd.css'
import './App.css'
import Compare from './components/Compare'
class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render(){
        const { items } = this.props
        return (
            <div className='App'>
            <Row>
                <h1>Compare Products</h1>
            </Row>
            <Row gutter={[32, 16]}>
                { 
                    items.map((item,index) => {
                        return <Col span={6} key={index}><Item item={item} /></Col>
                    })
                }
            </Row>
            <Compare/>
            </div>
        )
    }
}

const mapStates = (state)=>{
    return {
        items: state.items
    }
}
export default connect(mapStates)(App);