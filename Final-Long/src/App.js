import React from 'react'
import { Row, Col } from 'antd'
import { connect } from 'react-redux'
import Item from './components/Item'
import 'antd/dist/antd.css'
import Compare from './components/Compare'
class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render(){
        const { todos } = this.props
        return (
            <>
            <Row gutter={[32, 16]}>
              <Col span={4}/>
                { 
                    todos.map((item,index) => {
                        return <Col span={4} key={index}><Item item={item} /></Col>
                    })
                }
            </Row>
            <Compare/>
            </>
        )
    }
}

const mapStates = (state)=>{
    return {
        todos: state.todos
    }
}
export default connect(mapStates)(App);