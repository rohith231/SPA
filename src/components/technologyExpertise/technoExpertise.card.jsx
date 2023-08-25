import React from "react";
import { connect } from "react-redux";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
// import mobileDevelopment from "../mobiledev/dmobile"

const TechnoExpCard = (props) => {
  return (
    <div className="cardWrapper">
      <Card className="techno-exp-card">
        <Card.Body>
          <div className="techno-exp-card-header">
            <div className="iconWrapper">
              <FontAwesomeIcon icon={faLaptopCode} className="serviceIcon" />
            </div>
            <Card.Title><h5>{props.title}</h5></Card.Title>
          </div>
          <Card.Text><p>{props.body}</p></Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TechnoExpCard);
