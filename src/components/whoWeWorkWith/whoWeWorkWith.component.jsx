import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./whoWeWorkWith.styles.css";
import handShake from "../../assets/images/icons/handshake-solid.svg";
import arrowTrend from "../../assets/images/icons/arrow-trend-up-solid.svg";
import buildingRegular from "../../assets/images/icons/building-regular.svg";
import buildingNgo from "../../assets/images/icons/building-ngo-solid.svg";

const WhoWeWorkWith = (props) => {
  return (
    <>
      <div className="whoWeWorkWith-wrapper">
        <div className="whoWeWorkWith-container">
          <div className="col1">
            <h1>Who We Work With</h1>
            <p>
              As a leading mobile app development company in USA and India, we
              worked with 2000+ businesses either it is a start-up or enterprise
              and delivers the best solution in the industry. At Hyperlink
              InfoSystem, we offer a broad range of app development services
              based on business requirements.
            </p>
          </div>
          <div className="col2">
            <div className="box">
              <div className="icon">
                <img src={handShake} alt="hand-shake" className="icon-img" />
              </div>
              <h4>Start Up Business</h4>
            </div>
            <div className="box">
              <div className="icon">
                <img src={arrowTrend} alt="hand-shake" className="icon-img" />
              </div>
              <h4>Small & Medium Business</h4>
            </div>
            <div className="box">
              <div className="icon">
                <img
                  src={buildingRegular}
                  alt="hand-shake"
                  className="icon-img"
                />
              </div>
              <h4>Enterprise</h4>
            </div>
            <div className="box">
              <div className="icon">
                <img src={buildingNgo} alt="hand-shake" className="icon-img" />
              </div>
              <h4>Agencies</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhoWeWorkWith;
