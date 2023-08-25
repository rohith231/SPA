import React from 'react';
import CommonCard from '../../../../components/commonCard/commonCard.component';
import ServiceBG from '../../../../components/servicesBg/services-bg';
import "./VueJsDevlopment.style.css";
import "../../../../components/commonCard/commonCard.styles.css";
import { Text, Text1, list1, list2, VueServices, VUEJS1, VUEJS2, VUEJS3 } from './VueJSDevlopment.data';



const VUEJSDevelopment = (props) => {
  return (
    <>

      <ServiceBG title="VUEJS devlopment" page="Vuejs development" pagePath="vuejs-development" />
      <CommonCard type="VUEJS" title="Our Team" para={Text} title2="Why Choose Us" para1={Text1} title1="Other Services" data={list1} img={VUEJS1} />
      <CommonCard type="VueJs" title="Our VueJS Services" data={VueServices} title1="Domain expertise in ReactJS" data1={list2} img={VUEJS2} img1={VUEJS3} />


    </>

  )
}

export default VUEJSDevelopment;