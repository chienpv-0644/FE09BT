import React from 'react';
import ItermCardLagger from '../itermCard/itermCardLagger'
function HeaderMainContent(){
  return (
    <h1 >
        React
    </h1>
  );
}
function Maincontent(props) {
  const listIterms=props.children
  const blockk = listIterms.map((iterm,index) =>
  <div key={index.toString()}>
    <ItermCardLagger>
    {iterm.textIntro}
    </ItermCardLagger>
  </div>
);
  return (
    <div>
        <HeaderMainContent/>
        {blockk}
    </div>
  );
}

export default Maincontent;