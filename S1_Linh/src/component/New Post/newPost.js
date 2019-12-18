import React from 'react';
import TitlePost from '../Title Post/titlePost'
import CardPost from '../Card Post/cardPost'

import './newPost.css'

class NewPosts extends React.Component{
    render() {
        return (
            <div className="newPost">
                <TitlePost title="Bài viết mới"/>
                <CardPost src="https://picsum.photos/id/842/400/420" alt="newpost1" title="Lorem ipsum dolor sit amet, consectetur adipisicing elit." text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda.Lorem ipsum dolor sit amet, consectetur adipisicing"/>
                <CardPost src="https://picsum.photos/id/841/400/420" alt="newpost2" title="Lorem ipsum dolor sit amet, consectetur adipisicing elit." text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda.Lorem ipsum dolor sit amet, consectetur adipisicing"/>
                <CardPost src="https://picsum.photos/id/844/400/420" alt="newpost3" title="Lorem ipsum dolor sit amet, consectetur adipisicing elit." text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda.Lorem ipsum dolor sit amet, consectetur adipisicing"/>
                <CardPost src="https://picsum.photos/id/845/400/420" alt="newpost3" title="Lorem ipsum dolor sit amet, consectetur adipisicing elit." text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda.Lorem ipsum dolor sit amet, consectetur adipisicing"/>
            </div>
        )
    }
}

export default NewPosts;