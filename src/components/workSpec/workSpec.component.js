/* eslint-disable react/style-prop-object */
import React from "react";
import devImg1 from "../../assets/images/home/we-can1.png";
import devImg2 from "../../assets/images/home/we-can2.png";
import devImg3 from "../../assets/images/home/we-can3.png";
import "./workSpec.styles.css";

const WorkSpec = () => {
  return (
    <section id="workSpec">
      <h1 className="subHeader">
        What can we do for you<span className="sepTxt">?</span>
      </h1>
      <div className="wrapper">
        <div className="devCard">
          <img className="devImg" src={devImg1} alt="Website Development" />
          <h4 className="devTxt">Website Development</h4>
          <a href="/services/software-development" className="devLink">
            Learn More
          </a>
        </div>
        <div className="devCard">
          <img className="devImg" src={devImg2} alt="Mobile App Development" />
          <h4 className="devTxt">Mobile App Development</h4>
          <a href="/services/mobile-development" className="devLink">
            Learn More
          </a>
        </div>
        <div className="devCard">
          <img className="devImg" src={devImg3} alt="UI/UX Design" />
          <h4 className="devTxt">UI/UX Design</h4>
          <a href="/services/software-development" className="devLink">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default WorkSpec;
