import React from 'react';
import CommonCard from '../../../../components/commonCard/commonCard.component';
import ServiceBG from '../../../../components/servicesBg/services-bg';
import { cardData, Contact, digitalBusinessPara, digitalBusinessTitle, digitalCardData, digitalPara, hiringPara, hiringTable, offShoreImg, offShorePara, offShoreTitle } from './OffshoreDevelopment.data';
import "./OffshoreDevelopment.styles.css";

function OffshoreDevelopment() {
  return (
    <>
        <ServiceBG title="Offshore Development" page="Offshore Development" pagePath="offshore-development" />
        <CommonCard type="OffshoreCardContainer" data={cardData} />
        <CommonCard type="5545img" title={offShoreTitle} para={offShorePara} img={offShoreImg} button="Get in touch!" switch />
        <CommonCard title="Accelerate your Digital Transformation" para={digitalPara} center wid60 />
        <CommonCard type="5545img" title={digitalBusinessTitle} para={digitalBusinessPara} card={digitalCardData} switch />
        <CommonCard title="Flexible Hiring" para={hiringPara} center wid60 />
        <CommonCard type="hiringTable" data={hiringTable} />
        <CommonCard title="Let's make something great together." para={Contact} button="Get in touch!" center wid60 />
    </>
  )
}

export default OffshoreDevelopment;