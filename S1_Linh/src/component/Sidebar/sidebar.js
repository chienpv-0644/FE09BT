import React from 'react';
import FormRegister from '../Form Register/formRegister'
import NewPosts from '../New Post/newPost'
import './sideBar.css'

class SideBar extends React.Component{
    render() {
        return (
            <div className="sideBar">
                <FormRegister/>
                <NewPosts/>
            </div>
        )
    }
}

export default SideBar;