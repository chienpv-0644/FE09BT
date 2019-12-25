import React , { useState } from 'react';

function AddForm(props) {
  let [nameFood, setName] = useState('');
  let [priceFood, setPrice] = useState('');
  function handleClick(){
    let states= {name: nameFood,price: priceFood }
    props.addFoodFn(states)}
  return (
    <div style={{width:'100%'}}>
        <h3>Thêm tên món ăn</h3>
        <form id='formRegister' style={{width:'100%'}}>
          <input type='text' name="name" placeholder='Food Name' style={{display:'block'}} onChange={(e) => setName(e.target.value)} />
          <input type='number' name="price" placeholder='1000' style={{display:'block'}} onChange={(e) => setPrice(e.target.value)}  />
          <button type="button" onClick={handleClick}>Add Food</button>
        </form>
    </div>
  );
}

export default AddForm;