import React from 'react';
import FormRegister from '../Form Register/formRegister'
import NewPosts from '../New Post/newPost'

class SideBar extends React.Component{
    render() {
        return (
            <div className="col-lg-3">
                <FormRegister/>
                <NewPosts/>
            </div>
        )
    }
}

export default SideBar;