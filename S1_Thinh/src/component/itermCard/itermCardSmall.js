import React from 'react';
import Imagine from '../Imagine'
function ItermCardSmall(props) {
  const iterm= props.children;
  return (
    <div style={{width: '100%', display: 'flex', backgroundColor: '#f3fbf3' } }>
       
        <Imagine  imageUrls={iterm.link} />
                    <div style={{width: '55%'} }>
                      <h6 style={{color:'blue' } }>{iterm.title}</h6>
                      <p>{iterm.textIntro}</p>                   
        </div>
    </div>
  );
}

export default ItermCardSmall;