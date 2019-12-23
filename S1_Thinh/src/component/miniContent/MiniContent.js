import React from 'react';
import ItermCardSmall from '../itermCard/ItermCardSmall'

function HeaderMiniContent(){
  return (
    <h1 style={{borderBottom:'3px solid blue' } }>
        React
    </h1>
  )
}

function MiniContent(props) {
  const listIterms=props.children
  const blockk = listIterms.map((iterm,index) =>{
    return (
        <div key={index.toString()}>
          <ItermCardSmall >
                   {iterm}
          </ItermCardSmall>
        </div>
    )
  }
  
)
  return (
    <div style={{width:'100%' } }>
        <HeaderMiniContent/>
        {blockk}
    </div>
  )
}

export default MiniContent;