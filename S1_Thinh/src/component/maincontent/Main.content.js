import React from 'react';
import ItermCardLagger from '../itermCard/itermCardLagger'

function HeaderMainContent(){
  return (
    <h1 style={{borderBottom:'3px solid blue' } }>
        React
    </h1>
  )
}

function Maincontent(props) {
  const listIterms=props.children
  const blockk = listIterms.map((iterm,index) =>{
    return (
        <div key={index.toString()}>
          <ItermCardLagger >
                   {iterm}
          </ItermCardLagger>
        </div>
    )
  }
  
)
  return (
    <div style={{width:'75%' } }>
        <HeaderMainContent/>
        {blockk}
    </div>
  )
}

export default Maincontent;