import React from 'react';
import TitlePost from '../Title Post/titlePost'
import CardPost from '../Card Post/cardPost'

import './newPost.css'

class NewPosts extends React.Component{
    render() {
        let cardPost = [
            {src:"https://picsum.photos/id/243/400/420", alt:"newpost1", title:"Lorem ipsum dolor sit amet, consectetur.", text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda."},
            {src:"https://picsum.photos/id/244/400/420", alt:"newpost1", title:"Lorem ipsum dolor sit amet, consectetur.", text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda."},
            {src:"https://picsum.photos/id/250/400/420", alt:"newpost1", title:"Lorem ipsum dolor sit amet, consectetur.", text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda."},
            {src:"https://picsum.photos/id/252/400/420", alt:"newpost1", title:"Lorem ipsum dolor sit amet, consectetur.", text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda."}
        ]
        let dataCardPost = cardPost.map((item, index)=>
            <CardPost key={`cardPost_${index}`} src={item.src} alt={item.alt} title={item.title} text={item.text}></CardPost>
        )
        return (
            <div className="newPost">
                <TitlePost title="Bài viết mới"/>
                {dataCardPost}
            </div>
        )
    }
}

export default NewPosts;