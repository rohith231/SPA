import React from 'react';
import CommonCard from '../../../../components/commonCard/commonCard.component';
import ServiceBG from '../../../../components/servicesBg/services-bg';
import "./NodeJsDevlopment.style.css";
import "../../../../components/commonCard/commonCard.styles.css";
import { softText,list,list2,list3,nodeJS1,nodeJS2,nodeJS3,dualList1,dualList2,dualList3 } from './NodeJsDevlopment.data';

const NodeJsDevelopment = (props) => {
    return (
        <>
            <ServiceBG title="NodeJs devlopment" page="NODEJS Devlopment" pagePath="nodejs-development"/>
            <CommonCard type="Nodejs" para={softText} img={nodeJS1} title="Our NodeJS Development Services" li={list} img1={nodeJS2} title1="Other Services" li1={list2}   title2="NodeJS Mocha API test cases"  img2={nodeJS3}/>
            <CommonCard type="NodejsItems" title="Also We are good at following technologies," data={dualList1} data1={dualList2} data2={dualList3} />
            <CommonCard title="Domain expertise in NodeJS" ul={list3} />
        </>
    )
}

export default NodeJsDevelopment;