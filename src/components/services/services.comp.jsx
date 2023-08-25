import React from "react";
import "./services.styles.css";
import { Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import ServiceCard from "./services.card";

const Services = (props) => {
  return (
    <section id="services">
      <h4 className="sectionHeader">We are ultimate and do amazing things</h4>
      <p className="sectionBody">
        We offer wide range of Services for all your Mobile & Web Applications.
        <span className="sectionLinkText">
          <a
            href="/contact"
            className="text-foot"
            style={{ marginLeft: "5px" }}
          >
            Contact us
          </a>
        </span>
        today!
      </p>
      <div className="cardWrapper">
        <Row className="container-row">
          <Col lg={6}>
            <ServiceCard
              title="Software Development"
              body="We offer a full range of software development services for each &amp; every business domain. If you are a start-up or an established company, we are here to assist with solutions at every stage of your software development lifecycle, whether it is from the ground up development, proof of concept work, or helping maintain an existing application."
              link="/services/software-development"
              alt="Software Development"
              linkText="Read More"
            />
          </Col>
          <Col lg={6}>
            <ServiceCard
              title="Mobile development"
              body="Mobile phones has already take over the desktop computer for the internet usage. In this era, mobile phone is no more a need. It has become a necessity and it's hard to imagine life without mobile. Mobile apps is the heart of Mobile phones! Are you looking for Expert Mobile App Developers in India? Looking for one of the best mobile app development companies in India for all your Mobile solutions? We're with you."
              link="/services/mobile-development"
              alt="Mobile development"
              linkText="Read More"
            />
          </Col>
          <Col lg={6}>
            <ServiceCard
              title="Software Testing"
              body="IStellar have well-trained and highly experienced testers who can help you to streamline your QA process and help your engineering team to provide robust test/QA support. We used the best testing tools and advanced technology to deliver highly effective web application testing services."
              link="/services/software-testing"
              alt="Software Testing"
              linkText="Read More"
            />
          </Col>
          <Col lg={6}>
            <ServiceCard
              title="Cloud Services"
              body="We are helping enterprises to embrace their agility, with the scale and availability by using the cloud as a basis to derive new insights, unlock new opportunities, finding innovative methodologies to strategize and optimize their business goals/operations, data security, application development and find new opportunities of market expansion and richer customer experiences."
              link="/services/cloud-develops-services"
              alt="Cloud Services"
              linkText="Read More"
            />
          </Col>
        </Row>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Services);
