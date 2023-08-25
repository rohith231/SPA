import React, { useState } from "react";
import { Col } from "react-bootstrap";
import "./OurClient.style.css";

export default function OurclientCard(props) {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <Col
      lg={2}
      md={4}
      sm={6}
      xs={6}
      className="ourclient-card"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div className={props.bg}></div>
      <h5 className={isHovering ? "Header displayCheck" : "Header"}>
        {props.name}
      </h5>
      <p className={isHovering ? "SubHeader displayCheck" : "SubHeader"}>
      </p>
    </Col>
  );
}