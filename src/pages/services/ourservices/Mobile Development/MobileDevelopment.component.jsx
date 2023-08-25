import React from 'react';
import CommonCard from '../../../../components/commonCard/commonCard.component';
import ServiceBG from '../../../../components/servicesBg/services-bg';
import "./MobileDevelopment.styles.css";
import "../../../../components/commonCard/commonCard.styles.css";
import { Contact, cordova, cordovaImg, inlineAnchor, MobDevCardData, paraUL } from './MobileDevelopment.data';

const MobileDevelopment = () => {
  return (
    <>
      <ServiceBG title="Mobile Development" page="Mobile Development" pagePath="mobile-development" />
      <CommonCard type="title" title="What We Do ?" data={inlineAnchor}/>
      <CommonCard type="tripletCard" data={MobDevCardData} />
      <CommonCard type="paraUL" title="Our Mobile App Services" data={paraUL} />
      <CommonCard para={cordova} img={cordovaImg} switch />
      <CommonCard title="Need Mobile Developers? Contact us:" para={Contact} button="Contact Us" />
    </>
  )
}

export default MobileDevelopment;