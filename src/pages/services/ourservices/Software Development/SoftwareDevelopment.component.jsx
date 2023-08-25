import React from 'react';
import CommonCard from '../../../../components/commonCard/commonCard.component';
import ServiceBG from '../../../../components/servicesBg/services-bg';
import "./SoftwareDevelopment.styles.css";
import "../../../../components/commonCard/commonCard.styles.css";
import { Contact, Database, jsFullStack, jsFullStackImg, jsFullStackList, Microsoft, MicrosoftImg, MicrosoftList, MicrosoftTable, softTestList, softText, softText2 } from './SoftwareDevelopment.data';

const SoftwareDevelopment = () => {
  return (
    <>
      <ServiceBG title="Software Development" page="Software Development" pagePath="software-development" />
      <CommonCard para={softText} ul={softTestList} para2={softText2} />
      <CommonCard title="JavaScript Full-Stack Development" para={jsFullStack} ul={jsFullStackList} img={jsFullStackImg} />
      <CommonCard title="Microsoft Application Development Services & Solutions" para={Microsoft} ul={MicrosoftList} img={MicrosoftImg} title2="Our skill set in Microsoft .NET Technology" table={MicrosoftTable} switch />
      <CommonCard title="Database Development" para={Database} />
      <CommonCard title="Need Software Developers? Contact us:" para={Contact} button="Contact Us" />
    </>
  )
}

export default SoftwareDevelopment;