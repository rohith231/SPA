import React from 'react'
import CommonCard from '../../../../components/commonCard/commonCard.component';
import ServiceBG from '../../../../components/servicesBg/services-bg';
import { OtherMobileServices, OurPhoneGapServices, OurPhoneGapServicesList, OurTeam, PhoneGapImg1, PhoneGapImg2 } from './PhoneGapDevelopment.data';
import "./PhoneGapDevelopment.styles.css";

function PhoneGapDevelopment() {
  return (
    <>
      <ServiceBG title="PhoneGap Development" page="PhoneGap Development" pagePath="phonegap-development" />
      <CommonCard type="7030ulimg" title="Our Team" title2="Other Mobile App Services" para={OurTeam} ul={OtherMobileServices} img={PhoneGapImg1} />
      <CommonCard type="7030img" title="Our PhoneGap Development Services" para={OurPhoneGapServices} ul={OurPhoneGapServicesList} img={PhoneGapImg2} />
    </>
  )
}

export default PhoneGapDevelopment;