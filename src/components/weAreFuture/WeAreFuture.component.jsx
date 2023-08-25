import React from "react";
import blockchain from "../../assets/images/ic_blockchain.svg";
import ios from "../../assets/images/ic_ai.svg";
import android from "../../assets/images/ic_AR.svg";
import nft from "../../assets/images/ic_crypto_currency.png";
import backend from "../../assets/images/ic_machine_learning.svg";
import react from "../../assets/images/ic_nft.svg";
import "./WeAreFuture.styles.css";

const WeAreFuture = () => {
  return (
    <section id="weAreFuture">
      <div className="col50 headingColumn">
        <h1>
          We are Future-Forward.<br></br> Unleash 10x Growth with Us!
        </h1>
      </div>
      <div className="col50">
        <div className="img-container">
          <div className="img-box">
            <img src={blockchain} alt="" srcSet="" />
            <h5>Blockchain</h5>
          </div>
          <div className="img-box">
            <img src={ios} alt="" srcSet="" />
            <h5>IOS</h5>
          </div>
          <div className="img-box">
            <img src={android} alt="" srcSet="" />
            <h5>Android</h5>
          </div>
          <div className="img-box">
            <img src={nft} alt="" srcSet="" />
            <h5>NFT</h5>
          </div>
          <div className="img-box">
            <img src={backend} alt="" srcSet="" />
            <h5>Backend</h5>
          </div>
          <div className="img-box">
            <img src={react} alt="" srcSet="" />
            <h5>React</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeAreFuture;
