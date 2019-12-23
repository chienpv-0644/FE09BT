import React from 'react';

function RegisterForm() {
  return (
    <div style={{width:'100%', backgroundColor: 'blue'}}>
        <h3>ĐĂNG KÝ NHẬN BÀI VIẾT MỚI</h3>
        <p>Giấy phép thiết lập trang thông tin điện tử tổng hợp trên mạng số 2216/GP-TTĐT 
          do Sở Thông tin và Truyền thông Hà Nội cấp ngày 10 tháng 4 năm 2019.</p>
        <form id='formRegister' style={{width:'100%', display:'flex', flexDirection: 'column'}}>
          <input type='text' placeholder='Tên của bạn' style={{width:'85%', display:'block', height: 35, margin: 'auto'}}/>
          <input type='email' placeholder='Email của bạn' style={{width:'85%', display:'block', height: 35, margin: 'auto'}}/>
          <label style={{width:'100%'}}>
          <input type='checkbox' placeholder='Email của bạn' />
          Bạn đồng ý với nhân tin tức từ chúng tôi !
          </label>
          <input type='submit' value='ĐĂNG KÝ'  style={{width:'150px', height: '35px', borderRadius: '5px', margin: 'auto'}}/>
        </form>
    </div>
  );
}

export default RegisterForm;