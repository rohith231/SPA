import React, { useState } from "react";
import { Col } from "react-bootstrap";
import "./Portfolio.styles.css";

export default function PortfolioCard(props) {
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
      className="portfolio-card"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <a href={props.href} target="_blank" rel="noopener noreferrer">
        <div className={props.bg} href={props.href}></div>
        <h4 className={isHovering ? "Header displayCheck" : "Header"}>
          {props.name}
        </h4>
        <p className={isHovering ? "SubHeader displayCheck" : "SubHeader"}>
          {props.category.toUpperCase()}
        </p>
      </a>
    </Col>
  );
}
