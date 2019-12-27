import React from 'react';

function List(props) {
    let list =props.listF
    function addToCard(){
        console.log('Add')
    }
    list =list.map( (term,index) => 
    <tr key={index}>
        <td>{index+1}</td>
        <td>{term.name}</td>
        <td>{term.price}</td>
        <td><button type="button" onClick={addToCard}>Add</button></td>
        
    </tr>)
    
  return (
    <div style={{width: '100%' } }>
        <table>
        <thead>
            <tr>
                <th>STT</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
            </tr>
        </thead>
         <tbody>
              {list}   
                
        </tbody>

        </table>
        
        
    </div>
  );
}

export default List;