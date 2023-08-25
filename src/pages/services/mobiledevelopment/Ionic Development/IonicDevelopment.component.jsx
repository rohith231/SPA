import React from 'react'
import CommonCard from '../../../../components/commonCard/commonCard.component';
import ServiceBG from '../../../../components/servicesBg/services-bg';
import { cardServices, IonicImg1, IonicImg2, ionicPara, OtherMobileServices, OurTeam, OurWork, OurWorkList } from './IonicDevelopment.data';
import "./IonicDevelopment.styles.css";

function IonicDevelopment() {
  return (
    <>
      <ServiceBG title="Ionic Development" page="Ionic Development" pagePath="ionic-development" />
      <CommonCard type="7030ulimg" title="Our Team" title2="Other Mobile App Services" para={OurTeam} ul={OtherMobileServices} img={IonicImg1} />
      <CommonCard type="7030img" title="Our Work" para={OurWork} ul={OurWorkList} img={IonicImg2} />
      <CommonCard title="Benefits of Ionic & Our Ionic Development Services" para={ionicPara} center />
      <CommonCard type ="card" card={cardServices} />
    </>
  )
}

export default IonicDevelopment;