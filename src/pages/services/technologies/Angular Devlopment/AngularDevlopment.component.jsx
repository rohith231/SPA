import React from 'react';
import CommonCard from '../../../../components/commonCard/commonCard.component';
import ServiceBG from '../../../../components/servicesBg/services-bg';
import "./AngularDevlopment.style.css";
import "../../../../components/commonCard/commonCard.styles.css";
import { Text, Text1, list1, list2, AngularServices, Angular1, Angular2, } from './AngularDevlopment.data';



const AngularDevelopment = (props) => {
  return (
    <>

      <ServiceBG title="Angular devlopment" page="Angular development" pagePath="angular-development" />
      <CommonCard type="Angular" title="Our Team" para={Text} title2="Why Choose Us" para1={Text1} title1="Other Services" data={list1} img={Angular1} />
      <CommonCard type="AngularDev" title="Our Angular Services" data={AngularServices} title1="Domain expertise in ReactJS" data1={list2} img={Angular2}/>


    </>

  )
}

export default AngularDevelopment;