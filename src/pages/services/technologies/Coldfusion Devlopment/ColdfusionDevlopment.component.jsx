import React from 'react';
import CommonCard from '../../../../components/commonCard/commonCard.component';
import ServiceBG from '../../../../components/servicesBg/services-bg';
import "./ColdfusionDevlopment.style.css";
import "../../../../components/commonCard/commonCard.styles.css";
import { column1, column4,column2,column3, Contact,  dualList1, softTestList,softText,dualList2, dualList3 } from './ColdfusionDevlopment.data';

const ColdFusionDevelopment = (props) => {
    return (
        <>
            <ServiceBG title="ColdFusion devlopment" page="ColdFusion Devlopment" />
            <CommonCard type="coldFusion" para={softText} title="Summit Design Studio" par={softTestList} title1="Other ColdFusion Services" data={column1}   title4="Mike Matukaitis," data1={column2} title5="Related pages" data2={column3}/>
            <CommonCard type="dualListItems" title="Also We are good at following technologies," data={dualList1} data1={dualList2} data2={dualList3} />
            <CommonCard title="Domain expertise using ColdFusion" ul={column4} />
            <CommonCard title="Need Coldfusion Devlopers? Contact us:" para={Contact} button="Contact Us" />
        </>
    )
}

export default ColdFusionDevelopment;