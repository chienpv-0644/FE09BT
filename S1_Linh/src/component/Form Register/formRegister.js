import React from 'react';
import './form.css'

class FormRegister extends React.Component{
    render() {
        return (
            <form action="#" className="form">
                <h4 className="form__title">đăng ký nhận bài viết mới</h4>
                <p className="form__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi corporis dolore doloremque eaque esse facere fuga, fugiat impedit iste libero minus natus nemo provident qui quia repudiandae tempore tenetur!</p>
                <input type="text" className="form__input" placeholder="TEN CUA BAN"/>
                <input type="text" className="form__input" placeholder="EMAIL CUA BAN"/> <br/>
                 <p className="form__agree"><input type="checkbox"/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam commodi cum dolorem ducimus eligendi et id ipsa.</p><br/>
                <button className="form__button">DANG KY</button>
                <p className="form__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium assumenda, autem cupiditate dignissimos dolorem expedita facere facilis fugit in laboriosam, laudantium modi nostrum odit provident qui quos recusandae rerum, voluptas.</p>
            </form>
        )
    }
}

export default FormRegister;