import React from 'react'
import { connect } from 'react-redux'
import { Table, Icon } from 'antd'
import './Compare.css'
function Compare(props) {
    const { items } = props
    const compareItems = items.filter(item => item.action === 'Remove')
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Price',
          dataIndex: 'price',
          key: 'price',
        },
        {
          title: 'Color',
          dataIndex: 'color',
          key: 'color',
          render: colors => (
            <span>
              {
                colors.map((color, index) => (
                  <Icon type="heart" theme="filled" style={{color}} key={index}/>
                ))
              }
            </span>
          )
        },
        {
          title: 'Condition',
          dataIndex: 'condition',
          key: 'condition',
          render: condition => (
            <div className={condition}>
              {condition}
            </div>
          )
        },
      ];
    return (
        <>
            {
                compareItems.length > 1 
                && <Table 
                      dataSource={compareItems} 
                      columns={columns} 
                      rowKey={(_,index) => index + 1}
                    />
            }
        </>
    )
}
const mapState = (state)=>{
    return {
        items: state.items
    }
}
export default connect(mapState)(Compare)