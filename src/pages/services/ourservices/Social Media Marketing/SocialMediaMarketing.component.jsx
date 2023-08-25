import React from 'react';
import CommonCard from '../../../../components/commonCard/commonCard.component';
import ServiceBG from '../../../../components/servicesBg/services-bg';
import { socialMarketingServicesPara, socialMarketingUL, socialMedia2, socialMedia3, socialMediaMarketingPara } from './SocialMediaMarketing.data';
import "./SocialMediaMarketing.styles.css";

function SocialMediaMarketing() {
  return (
    <>
        <ServiceBG title="Social Media Marketing" page="Social Media Marketing" pagePath="social-media-marketing" />
        <CommonCard title="Social Media Marketing" para={socialMarketingServicesPara} img={socialMedia3} />
        <CommonCard title="Our Social Marketing Services" para={socialMediaMarketingPara} img={socialMedia2} ul={socialMarketingUL} liClass="m20" /></> 
        )
}

export default SocialMediaMarketing