import React from 'react'
import { connect } from 'react-redux'
import { Table } from 'antd'
function Compare(props) {
    const { compareItems } = props
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
        },
        {
          title: 'Condition',
          dataIndex: 'condition',
          key: 'condition',
        },
      ];
    return (
        <>
            {
                compareItems.length > 1 && <Table dataSource={compareItems} columns={columns} />
            }
        </>
    )
}
const mapState = (state)=>{
    return {
        compareItems: state.compareItems
    }
}
export default connect(mapState)(Compare)