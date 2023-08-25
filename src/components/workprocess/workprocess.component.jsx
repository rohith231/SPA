import React from 'react';
import "../workprocess/workprocess.styles.css";
import { RxDoubleArrowDown } from "../../../node_modules/react-icons/rx";

const Workprocess = () => {
  return (
    <div className='workprocess'>
        <h5>Work Process</h5>
        <h2>How do we work ?</h2>
        <div className="workprocessText">
          <h5>Strategy & Testing</h5>
          <RxDoubleArrowDown className='arrow' />
          <h5>Reporting</h5>
          <RxDoubleArrowDown className='arrow' />
          <h5>Discussion</h5>
        </div>
        <div className="workprocess-bg" />
    </div>
  )
}

export default Workprocess;