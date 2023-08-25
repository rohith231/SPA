import React from 'react';
import "./CommonContainer.styles.css";

function CommonContainer(props) {
  return (
    <div className='commonContainer'>
        {props.h2 && <h2 className='ccheading2'>{props.h2}</h2>}
        {props.p && <p className='ccp'>{props.p}</p>}
        {props.h1 && <h1 className='ccheading1'>{props.h1}</h1>}
    </div>
  )
}

export default CommonContainer;