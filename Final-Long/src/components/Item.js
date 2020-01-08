import React from 'react'
import { Row, Col, Button } from 'antd'
import 'antd/dist/antd.css'
import './Item.css'
import { connect } from 'react-redux'
import { compareItem, removeItem } from '../actions/item'
class Item extends React.Component {
    constructor(props) {
        super(props)
    }
    render(){
        const { item, handleRemove, handleCompare } = this.props
        const { name } = item 
        const handleButton = item.action === 'Remove' ? handleRemove : handleCompare
        return (
            <> 
            <Row className='item'>
                <Col span={24}>
                    <img src={item.image[name]} alt='title' style={{ height: '300px', width: '100%'}}/>
                </Col>
                <Col span={24} className={`overlay ${item.action === 'Remove' ? 'show' : ''}`}>
                    <Button onClick={() => handleButton(item.id)}>{item.action}</Button>
                </Col>
                <Col className='desc' span={12}>{item.name}</Col>
                <Col className='desc' span={12} style={{textAlign: 'right'}}>{item.price}</Col>
                <Col className='desc' span={24}>{item.desc}</Col>
            </Row>
            </>
        )
    }
}
const mapDispatch = dispatch => {
    return {
        handleCompare: id => dispatch(compareItem(id)),
        handleRemove: id => dispatch(removeItem(id))
    }
}
const mapState = state => {
    return { items: state.items}
}
export default connect(mapState, mapDispatch)(Item);