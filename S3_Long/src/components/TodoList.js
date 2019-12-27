import React from 'react';
import { Table, Button } from 'antd';
import './TodoList.css'
class TodoList extends React.Component {
    render() {
        const { todoItems, handleDelete, handleEdit, recordEdit } = this.props;
        const columns = [
            {
                title: '#',
                width: 100,
                key: 'id',
                render: (text,record,index) => {
                    return (
                    <b>{index + 1}</b>
                )}
            },
            {
                title: 'Name',
                dataIndex: 'name',
                width: 200
            },
            {
                title: 'Action',
                key: 'action',
                width: 200,
                render: (record) => {
                    return (
                    <div>
                        <Button type='danger' 
                            id={record.id} 
                            onClick={handleDelete}>
                                Delete
                        </Button>
                        <Button type='primary' 
                            id={record.id} 
                            onClick={handleEdit}>
                                Edit
                        </Button>
                    </div>
                )}
            }
        ];
        return (
            <div className='list'>
                <Table columns={columns} 
                    dataSource={todoItems} 
                    rowKey={(_,index) => index + 1}
                    bordered
                    rowClassName={(record) => {
                        if(record.id === recordEdit) return 'selected'
                    }}
                />
            </div>
        )
    }
}

export default TodoList