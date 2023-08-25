import React from 'react';
import CommonCard from '../../../../components/commonCard/commonCard.component';
import ServiceBG from '../../../../components/servicesBg/services-bg';
import "./ReactJSDevlopment.styles.css";
import "../../../../components/commonCard/commonCard.styles.css";
import { Text, Text1,ReactCardData, list1,inlineAnchor ,ReactJsImg,ReactJSIm,ReactJS1,ReactJS2,ReactJS3,ReactJS4 } from './ReactJSDevlopment.data';

const ReactJSDevelopment = (props) => {
    return (
        <>
          <ServiceBG title="ReactJS devlopment" page="ReactJS Devlopment" />
          <CommonCard type="ReactJS" title="Our Team" para={Text} title1="Other Services" data={list1}   title2="Why Choose Us" para1={Text1} img={ReactJsImg}/>
          <CommonCard type="React" title="ReactJS Development Services" data={inlineAnchor} />
          <CommonCard type="ReactCard" data={ReactCardData} />
          <CommonCard type="images" title="Few of our ReactJS Works here" img1={ReactJS1} img2={ReactJS2} img3={ReactJS3} img4={ReactJS4} />
          <CommonCard type="img" title="Domain expertise in ReactJS" img={ReactJSIm}  />
    </>
    )
}

export default ReactJSDevelopment;