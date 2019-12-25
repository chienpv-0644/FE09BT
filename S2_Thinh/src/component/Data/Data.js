import React, { useState } from 'react';
import AddForm from '../AddForm/AddForm'
import SearchForm from '../Search/SearchForm'

function Data(props) {
    let data=props.data
    const [lenList, setLen] =useState(0);
    function handel(states){
      data.push(states)
      setLen(data.length)
    }
  return (
    <div style={{width: '100%' } }>
            <div className="App" >
        <AddForm className="Maincontent" addFoodFn={(states)=>handel(states)}/>
        <SearchForm className="SideBar" list={data} key={lenList}/>

            </div>
    </div>
  );
}

export default Data;