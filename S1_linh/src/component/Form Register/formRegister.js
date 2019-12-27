import React from 'react';
import './form.css'

class FormRegister extends React.Component{
    render() {
        return (
            <form action="#" className="form">
                <h5 className="form__title">đăng ký nhận bài viết mới</h5>
                <p className="form__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi corporis dolore doloremque eaque esse facere fuga, tempore tenetur!</p>
                <input type="text" className="form__input" placeholder="TEN CUA BAN"/>
                <input type="text" className="form__input" placeholder="EMAIL CUA BAN"/> <br/>
                 <p className="form__agree"><input type="checkbox"/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam commodi.</p><br/>
                <button className="form__button">DANG KY</button>
                <p className="form__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium assumenda, autem cupiditate dignissimos dolorem expedita facere facilis fugit in laboriosam, laudantium modi.</p>
            </form>
        )
    }
}

export default FormRegister;