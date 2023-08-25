// import React, { useState } from "react";
import "./OurClient.style.css";
import {OurclientStacks } from "./OurClient.data";
import ServiceBG from "../../../components/servicesBg/services-bg";
import { Row, Container } from "react-bootstrap";
import OurclientCard from "./OurClientCard";

const Ourclient = (props) => {
  return (
    <>
      <ServiceBG
        title="Our Client"
        page="ourclient"
        pagePath="/ourclient"
        solo
      />
      
      <div className="ourclient-display">
        
          <Container className="ourclient-grid">
            <Row className="row">
              {OurclientStacks.map((e) => (
                <OurclientCard bg={e.bg} key={e.name} {...e} />
              ))}
            </Row>
          </Container>


      </div>
    </>
  );
};

export default Ourclient;