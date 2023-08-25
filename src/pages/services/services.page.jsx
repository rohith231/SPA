import React from "react";
import "./services.styles.css";
// import { Nav } from 'react-bootstrap';
import Workprocess from "../../components/workprocess/workprocess.component";
import TechnoExpertise from "../../components/technologyExpertise/technoExpertise.component";
import ServiceBG from "../../components/servicesBg/services-bg";
import Services from "../../components/services/services.comp";

const ServicesPage = () => {
  return (
    <>
      <ServiceBG title="Services" />
      <div className="text-container">
        <h1>Our Services</h1>
        <p>
          IT Services in IStellar is a strategic business division focused on
          providing software services for small, medium & large scale
          industries. We perform above and beyond customer expectations.
          IStellar offer a distinctive value proposition as a premier supplier
          of services with diverse capabilities that include Application
          Development, Maintenance and Re-engineering & Product development. We
          offers solutions that meet the needs of clients of all sizes.
        </p>
      </div>
      <Services />
      <Workprocess />
      <TechnoExpertise />
    </>
  );
};

export default ServicesPage;
