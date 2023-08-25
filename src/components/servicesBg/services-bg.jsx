import React from "react";
import { Nav } from "react-bootstrap";
import "./services-bg.styles.css";

const ServiceBG = (props) => {
  return (
    <>
      <div className="services-bg" />
      <h2 className="services-h2">{props.title}</h2>
      <Nav className="nav" activeKey="/">
        <div className="nav-container">
          <Nav.Item className="nav-item">
            <Nav.Link href="/">
              <h5 className="nav-hyperlink">Home</h5>
            </Nav.Link>
          </Nav.Item>
          {!props.solo && (
            <>
              <p>&gt;</p>
              <Nav.Item>
                <Nav.Link href="/services">
                  <h5 className="nav-hyperlink">Services</h5>
                </Nav.Link>
              </Nav.Item>
            </>
          )}
          {props.page && (
            <>
              <p>&gt;</p>
              <Nav.Item>
                <Nav.Link href={props.pagePath}>
                  <h5 className="nav-hyperlink">{props.page}</h5>
                </Nav.Link>
              </Nav.Item>
            </>
          )}
        </div>
      </Nav>
    </>
  );
};

export default ServiceBG;
