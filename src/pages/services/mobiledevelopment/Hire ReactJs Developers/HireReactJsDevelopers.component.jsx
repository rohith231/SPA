import React from 'react'
import CommonCard from '../../../../components/commonCard/commonCard.component';
import ServiceBG from '../../../../components/servicesBg/services-bg';
import { commonCardData, Contact, hireReactPara, hireReactParaList, productDevContent, productDevImages } from './HireReactJsDevelopers.data';
import "./HireReactJsDevelopers.styles.css";

function HireReactJsDevelopers() {
  return (
    <>
      <ServiceBG title="Hire ReactJS Developers" page="Hire ReactJS Developers" pagePath="hire-reactjs-developers" />
      <CommonCard para={hireReactPara} ul={hireReactParaList} />
      <CommonCard title="Work Process" />
      <CommonCard type="commonCardContainer" data={commonCardData} />
      <CommonCard type="productDevContent" title="Benefits" img={productDevImages} data={productDevContent} />
      <CommonCard title="Have Question ? Get in touch!" para={Contact} button="Contact Us" center wid60 textCenter />
      {/* <CommonCard type="7030ulimg" title="Our Team" title2="Other Mobile App Services" para={OurTeam} ul={OtherMobileServices} img={IonicImg1} />
      <CommonCard type="7030img" title="Our Work" para={OurWork} ul={OurWorkList} img={IonicImg2} />
      <CommonCard title="Benefits of Ionic & Our Ionic Development Services" para={ionicPara} center />
      <CommonCard type ="card" card={cardServices} /> */}
    </>
  )
}

export default HireReactJsDevelopers;