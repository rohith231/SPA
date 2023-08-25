import React from "react";
import Img1 from "../../assets/images/choose-1.svg";
import Img2 from "../../assets/images/choose-2.svg";
import Img3 from "../../assets/images/choose-3.svg";
import Img4 from "../../assets/images/choose-4.svg";
import Img5 from "../../assets/images/choose-5.svg";
import Img6 from "../../assets/images/choose-6.svg";
import "./WhyChoose.style.css";

const WhyChooseUs = () => {
  return (
    <section className="WhyChoose div-block">
      <div className="container div-block">
        <div className="headingUs div-block">
          <h2 id="White">Why Choose&nbsp;</h2>
          <h2 id="Black"> Us</h2>
        </div>
        <div className="line div-block"></div>

        <div className="ct-new-columns whychoose-container">
          <div className="div-block" id="div_block">
            <img className="imagess" src={Img1} alt="Website Development" />
            <h5 className="Txt">Committed To Success</h5>
          </div>
          <div className="div-block" id="div_block">
            <img className="imagess" src={Img2} alt="Mobile App Development" />
            <h5 className="Txt">Follows Industry Trends</h5>
          </div>
          <div className="div-block" id="div_block">
            <img className="imagess" src={Img3} alt="UI/UX Design" />
            <h5 className="Txt">Professional Developers</h5>
          </div>
          <div className="ct-div-block" id="div_block">
            <img className="imagess" src={Img4} alt="Website Development" />
            <h5 className="Txt">Confidentiality</h5>
          </div>
          <div className="ct-div-block" id="div_block">
            <img className="imagess" src={Img5} alt="Mobile App Development" />
            <h5 className="Txt">Guaranteed ROI</h5>
          </div>
          <div className="ct-div-block" id="div_block">
            <img className="imagess" src={Img6} alt="UI/UX Design" />
            <h5 className="Txt">24/7 Maintenance And Support</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
