
import React from "react";

function Imagine(props){
  return (
    <div style={{width: '45%', padding: 5 } }>
      <img
        style={{ width: '100%'}}
        src={process.env.PUBLIC_URL + props.imageUrls} alt={props.imageUrls}
      />
    </div>
         
  )
}
export default Imagine;