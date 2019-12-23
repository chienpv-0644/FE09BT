import React from 'react';
import Imagine from '../Imagine'

function ItermCardLagger(props) {
  const iterm= props.children;
  const time='10/04/1994'
  return (
    <div style={{width: '100%', display: 'flex', backgroundColor: '#f3fbf3' } }>
       
        <Imagine  imageUrls={iterm.link} />
                    <div style={{width: '55%'} }>
                      <h5 style={{color:'blue' } }>{iterm.title}</h5>
                      <div style={{fontSize: '13px', color: 'gray'} }>
                        <small >Author: {iterm.authour}</small>
                        <small style={{marginLeft: '10px'} }>Date: {time}</small>
                      </div>
                      <p>{iterm.textIntro}</p>
                      <button>Read more</button>                      
        </div>
    </div>
  );
}

export default ItermCardLagger;