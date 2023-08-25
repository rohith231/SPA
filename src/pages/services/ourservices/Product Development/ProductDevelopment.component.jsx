import React from 'react';
import CommonCard from '../../../../components/commonCard/commonCard.component';
import ServiceBG from '../../../../components/servicesBg/services-bg';
import { commonCardData, Contact, productDevContent, ProductDevelopmentPara, productDevImages, workProcess } from './ProductDevelopment.data';
import "./ProductDevelopment.styles.css";

function ProductDevelopment() {
  return (
    <>
        <ServiceBG title="Product Development" page="Product Development" pagePath="product-development" />
        <CommonCard para={ProductDevelopmentPara} />
        <CommonCard title="Work Process" para={workProcess} />
        <CommonCard type="commonCardContainer" data={commonCardData} />
        <CommonCard type="productDevContent" title="Services" img={productDevImages} data={productDevContent} />
        <CommonCard title="Have Question ? Get in touch!" para={Contact} button="Contact Us" center wid60 textCenter />
    </>
  )
}

export default ProductDevelopment;