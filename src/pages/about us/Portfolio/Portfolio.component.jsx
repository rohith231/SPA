import React, { useState } from "react";
import "./Portfolio.styles.css";
import { PortfolioStacks } from "./Portfolio.data";
import ServiceBG from "../../../components/servicesBg/services-bg";
import { Nav, Row, Container } from "react-bootstrap";
import PortfolioCard from "./PortfolioCard";

const Portfolio = (props) => {
  const [activeTab, setActiveTab] = useState("all");
  return (
    <>
      <ServiceBG
        title="Portfolio"
        page="Portfolio"
        pagePath="/portfolio"
        solo
      />
      <div className="portfolio-text">
        <p className="">
          <b>Info!</b> Only very few of our projects were added. More will be
          added soon.
        </p>
      </div>
      <div className="portfolio-navbar">
        <Nav className="portfolio-nav" variant="pills" defaultActiveKey="all">
          <Nav.Item onClick={() => setActiveTab("all")}>
            <Nav.Link eventKey="all">All</Nav.Link>
          </Nav.Item>
          <Nav.Item onClick={() => setActiveTab("reactjs")}>
            <Nav.Link eventKey="reactjs">ReactJs</Nav.Link>
          </Nav.Item>
          <Nav.Item onClick={() => setActiveTab("reactNative")}>
            <Nav.Link eventKey="reactNative">ReactNative</Nav.Link>
          </Nav.Item>
          <Nav.Item onClick={() => setActiveTab("nodejs")}>
            <Nav.Link eventKey="nodejs">NodeJs</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <div className="portoflio-display">
        {activeTab === "all" ? (
          <Container className="portoflio-grid">
            <Row className="row">
              {PortfolioStacks.map((e) => (
                <PortfolioCard bg={e.bg} key={e.name} {...e} />
              ))}
            </Row>
          </Container>
        ) : null}

        {activeTab === "reactjs" ? (
          <Container className="portoflio-grid">
            <Row className="row">
              {PortfolioStacks.map((e) => {
                if (e.category === "reactjs") {
                  console.log("reactjs");
                  return <PortfolioCard bg={e.bg} key={e.name} {...e} />;
                } else {
                  return null;
                }
              })}
            </Row>
          </Container>
        ) : null}

        {activeTab === "reactNative" ? (
          <Container className="portoflio-grid">
            <Row className="row">
              {PortfolioStacks.map((e) => {
                if (e.category === "reactNative") {
                  console.log("reactNative");
                  return <PortfolioCard bg={e.bg} key={e.name} {...e} />;
                } else {
                  return null;
                }
              })}
            </Row>
          </Container>
        ) : null}

        {activeTab === "nodejs" ? (
          <Container className="portoflio-grid">
            <Row className="row">
              {PortfolioStacks.map((e) => {
                if (e.category === "nodejs") {
                  return <PortfolioCard bg={e.bg} key={e.name} {...e} />;
                } else {
                  return null;
                }
              })}
            </Row>
          </Container>
        ) : null}
      </div>
    </>
  );
};

export default Portfolio;
