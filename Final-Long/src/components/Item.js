import React from 'react'
import { Row, Col, Button } from 'antd'
import 'antd/dist/antd.css'
import './Item.css'
class Item extends React.Component {
    constructor(props) {
        super(props)
    }
    render(){
        const { item } = this.props
        const { name } = item 
        return (
            <> 
            <Row className='item'>
                <Col span={24}>
                    <img src={item.image[name]} alt='title' style={{ height: '250px', width: '100%'}}/>
                </Col>
                <Col span={24} className='overlay'>
                    <Button>Compare</Button>
                </Col>
                <Col className='desc' span={12}>{item.name}</Col>
                <Col className='desc' span={12} style={{textAlign: 'right'}}>{item.price}</Col>
                <Col className='desc' span={24}>{item.desc}</Col>
            </Row>
            </>
        )
    }
}

export default Item;