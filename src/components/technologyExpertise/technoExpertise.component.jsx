import React from 'react';
import { Col, Row } from 'react-bootstrap';
import TechnoExpertiseCard from './technoExpertise.card';
import "./technoExpertise.styles.css";

const TechnoExpertise = () => {
  return (
    <div className='techno-exp'>
        <h2>Technology Expertise</h2>
        <Row className="container-row">
            <Col lg={6} className="techno-exp-container">
              <TechnoExpertiseCard
                title="ColdFusion Development"
                body="IStellar ColdFusion developers are experts in developing web applications in CFML (ColdFusion, Railo, OpenBD) that meet your businesses needs. Build applications with all application frameworks like ColdBox, FW/1 ...etc."
                link="/"
                alt="ColdFusion Development"
              />
            </Col>
            <Col lg={6} className="techno-exp-container">
              <TechnoExpertiseCard
                title="NodeJS Development"
                body="IStellar NodeJS development team can help you build a realtime node.js application efficiently and with top quality. We have a team of Expert ExpressJS, HapiJS, KoaJS and other NodeJS Framework developers."
                link="/"
                alt="NodeJS Development"
              />
            </Col>
            <Col lg={6} className="techno-exp-container">
              <TechnoExpertiseCard
                title="ReactJS Development"
                body="We have strong ReactJS developers who can build clean, reusable user interface components with popular React.js workflows. Our experts familiar in React JS - Redux - Webpack - ES6/ES7 - Babel - TDD process in react apps."
                link="/"
                alt="ReactJS Development"
              />
            </Col>
            <Col lg={6} className="techno-exp-container">
              <TechnoExpertiseCard
                title="MuraCMS Expertise"
                body="We are good at MuraCMS; Good with confidence, the years of working expertise confidence. Our Mura team sophisticated to customize MuraCMS as well as developed open source themes for Mura."
                link="/"
                alt="MuraCMS Expertise"
              />
            </Col>
          </Row>
    </div>
  )
}

export default TechnoExpertise;