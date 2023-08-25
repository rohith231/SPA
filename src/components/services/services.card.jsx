import React from "react";
import { connect } from "react-redux";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";

const ServiceCard = (props) => {
  return (
    <Card className="service-card">
      <Card.Body>
        <div className="service-card-header">
          <div className="iconWrapper">
            <FontAwesomeIcon icon={faLaptopCode} className="serviceIcon" />
          </div>
          <Card.Title>
            <h5>{props.title}</h5>
          </Card.Title>
        </div>
        <Card.Text>{props.body}</Card.Text>
        <a className="serviceLink" href={props.link} alt={props.alt}>
          {props.linkText}
        </a>
      </Card.Body>
    </Card>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ServiceCard);
