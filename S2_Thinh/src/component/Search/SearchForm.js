import React, { useState } from 'react';
import List from '../List/List'
function SearchForm(props) {
  let list=props.list
  let [nameFood, setName] = useState('');


  function filtedList(str){
    let re = new RegExp(str)
    return list.filter(Iterm => {
        return Iterm.name.match(re);
    });
  }

  (function searchFood(){
    list=filtedList(nameFood)
  })()
  
  return (
    <div style={{width: '100%' } }>
        <input name="searchName" placeholder="Food name" style={{display:'block'}} onChange={(e) => setName(e.target.value)} />           
        <List listF={list} />
    </div>
  );
}

export default SearchForm;