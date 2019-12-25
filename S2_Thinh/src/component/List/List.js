import React from 'react';

function List(props) {
    let list =props.listF
    console.log(list)
    list =list.map( (term,index) => 
    <li key={index}>
        <span>{term.name}</span>
        <span>{term.price}</span>
    </li>)
  return (
    <div style={{width: '100%' } }>
         <ul>
              {list}       
        </ul>
        
    </div>
  );
}

export default List;