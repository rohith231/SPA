import React from 'react';
import CommonCard from '../../../../components/commonCard/commonCard.component';
import ServiceBG from '../../../../components/servicesBg/services-bg';
import { golangCardData, golangData, golangImg, golangPara, golangServicesPara } from './GolangDevelopment.data';
import "./GolangDevelopment.styles.css";

function GolangDevelopment() {
  return (
    <>
        <ServiceBG title="Golang Development" page="Golang Development" pagePath="golang-development" />
        <CommonCard type="paraUL" heading1="Golang Development Company" title="Other Services" data={golangData} />
        <CommonCard type="7030img" title="Why Golang?" para={golangPara} img={golangImg} button="Need Advice? Talk to Our Experts ->" btnFit />
        <CommonCard title="Golang Development Services" para={golangServicesPara} center wid60 />
        <CommonCard type ="card" card={golangCardData} />
    </>
  )
}

export default GolangDevelopment;