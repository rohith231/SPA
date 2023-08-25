import React from 'react'
import CommonCard from '../../../../components/commonCard/commonCard.component';
import ServiceBG from '../../../../components/servicesBg/services-bg';
import { awsImg, awsPara, cloudServicesImg, cloudServicesPara, Contact, windowsImg, windowsPara } from './CnDServices.data';
import "./CnDServices.styles.css";

function CnDServices() {
  return (
    <>
      <ServiceBG title="Cloud And Devops Services" page="Cloud And Devops Services" pagePath="cloud-develops-services" />
      <CommonCard type="7030img" title="Cloud Services" para={cloudServicesPara} img={cloudServicesImg} />
      <CommonCard type="7030img" title="AWS – Amazon Web Services" para={awsPara} img={awsImg} heading="heading2" switch />
      <CommonCard type="7030img" title="Windows Azure" para={windowsPara} img={windowsImg} heading="heading2" />
      <CommonCard title="Need Software Developers? Contact us:" para={Contact} button="Contact Us" />
    </>
  )
}

export default CnDServices;