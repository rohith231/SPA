import React from "react";
import { Col } from "react-bootstrap";

export default function TechCard(props) {
  return (
    <Col lg={2} md={4} sm={6} xs={6} className="tech-card">
      <img src={props.img} alt="" />
      <h4 className="techHeader">{props.name}</h4>
      <p className="techSubHeader">{props.category.toUpperCase()}</p>
    </Col>
  );
}
