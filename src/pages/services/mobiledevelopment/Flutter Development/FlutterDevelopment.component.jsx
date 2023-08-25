import React from 'react'
import CommonCard from '../../../../components/commonCard/commonCard.component';
import ServiceBG from '../../../../components/servicesBg/services-bg';
import { cardServices, flutterImg1, flutterImg2, flutterPara, OtherMobileServices, OurTeam, WhyRightChoice, WhyRightChoiceList } from './FlutterDevelopment.data';
import "./FlutterDevelopment.styles.css";

function FlutterDevelopment() {
  return (
    <>
      <ServiceBG title="Flutter Development" page="Flutter Development" pagePath="flutter-development" />
      <CommonCard type="7030ulimg" title="Our Team" title2="Other Mobile App Services" para={OurTeam} ul={OtherMobileServices} img={flutterImg1} />
      <CommonCard type="7030img" title="Why IStellar Right Choice For Flutter?" para={WhyRightChoice} ul={WhyRightChoiceList} img={flutterImg2} />
      <CommonCard title="Our Flutter Development Services" para={flutterPara} center />
      <CommonCard type ="card" card={cardServices} />
    </>
  )
}

export default FlutterDevelopment;