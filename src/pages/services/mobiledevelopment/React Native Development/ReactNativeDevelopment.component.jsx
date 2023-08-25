import React from 'react'
import CommonCard from '../../../../components/commonCard/commonCard.component';
import ServiceBG from '../../../../components/servicesBg/services-bg';
import { cardServices, OtherMobileServices, OurTeam, reactNativeImg, reactNativePara, rnDevImg, WeCanHelpYouWith, WhyChooseUs } from './ReactNativeDevelopment.data';
import "./ReactNativeDevelopment.styles.css";

function ReactNativeDevelopment() {
  return (
    <>
      <ServiceBG title="React Native Development" page="React Native Development" pagePath="react-native-development" />
      <CommonCard type="7030ulimg" title="Our Team" title2="Other Mobile App Services" para={OurTeam} ul={OtherMobileServices} img={reactNativeImg} />
      <CommonCard type="7030img" title="Why Choose Us" para={WhyChooseUs} />
      <CommonCard type="7030img" title="We can help you with" ul={WeCanHelpYouWith} img={rnDevImg} />
      <CommonCard title="Our React Native Development Services" para={reactNativePara} center />
      <CommonCard type ="card" card={cardServices} />
    </>
  )
}

export default ReactNativeDevelopment;