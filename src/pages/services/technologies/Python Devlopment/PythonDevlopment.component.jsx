import React from 'react';
import CommonCard from '../../../../components/commonCard/commonCard.component';
import ServiceBG from '../../../../components/servicesBg/services-bg';
import { golangCardData, golangData, golangImg, golangPara, golangServicesPara,PythonPara } from './PythonDevlopment.data';
import "./PythonDevlopment.style.css";

function PythonDevelopment() {
  return (
    <>
        <ServiceBG title="Python Development" page="Python Development" pagePath="python-development" />
        <CommonCard type="paraUL" heading1="Python Development Company" title="Other Services" data={golangData} />
        <CommonCard type="pythonimg" title="Django Development" data={PythonPara} title1="Flask Development" para={golangPara} img={golangImg} button="Need Advice? Talk to Our Experts ->" btnFit />
        <CommonCard title="Python Development Services" para={golangServicesPara} center wid60 />
        <CommonCard type ="card" card={golangCardData} />
    </>
  )
}

export default PythonDevelopment;