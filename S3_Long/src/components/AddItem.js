import React from 'react';
import { Button, Input } from 'antd';
import 'antd/dist/antd.css'
import './AddItem.css'
class AddItem extends React.Component {
    render() {
        const { handleChange, handleSubmit, name } = this.props
        return (
            <div>
                <form className='formAdd' onSubmit={(e) => handleSubmit(e, name)}>
                    <Input value={name} onChange={handleChange}/>
                    <Button type="primary" htmlType="submit">Add</Button>
                </form>
            </div>
        )
    }
}

export default AddItem