import React from "react";
import goalImg1 from "../../assets/images/TopCustomSoftwareDevelopmentCompany 2 (7).svg";
// import goalImg2 from "../../assets/images/software-development.svg";
import goalImg2 from "../../assets/images/bairesdev-logo.svg";
import goalImg3 from "../../assets/images/bairesdev-inc-5000-awards-logo-2019.svg";
import goalImg4 from "../../assets/images/bairesdev-forbes-logo.webp";
import goalImg5 from "../../assets/images/bairesdev-stevie-winner-2020-silver.svg";
import goalImg6 from "../../assets/images/bairesdev-silicon-valley-business-journal.svg";
import goalImg7 from "../../assets/images/bairesdev-financial-times-awards-logo.svg";
import goalImg8 from "../../assets/images/bairesdev-best-company-diversity-white-full.svg";
import goalImg9 from "../../assets/images/top-web-designers.png";
import goalImg10 from "../../assets/images/top-companies-global.png";
import goalImg11 from "../../assets/images/top-companies-2020.png";
import goalImg12 from "../../assets/images/bairesdev-techtimes-logo.svg";
import "./Achivements.style.css";

const Achivements = () => {
  return (
    <section id="Achivements">
      <h1>Awards and Recognitions</h1>
      <div className="line div-block"></div>
      <div className="Achive">
        <div className="goalCard">
          <img className="goalImg" src={goalImg1} alt="Website Development" />
          {/* <p className="goalTxt">Top customer Softare Devlopment company</p> */}
        </div>
        <div className="goalCard">
          <img
            className="goalImg"
            src={goalImg2}
            alt="Mobile App Development"
          />
        </div>
        <div className="goalCard">
          <img className="goalImg" src={goalImg3} alt="UI/UX Design" />
        </div>
        <div className="goalCard">
          <img className="goalImg" src={goalImg4} alt="UI/UX Design" />
        </div>
        <div className="goalCard">
          <img className="goalImg" src={goalImg5} alt="UI/UX Design" />
        </div>
        <div className="goalCard">
          <img className="goalImg" src={goalImg6} alt="UI/UX Design" />
        </div>
        <div className="goalCard">
          <img className="goalImg" src={goalImg7} alt="UI/UX Design" />
        </div>
        <div className="goalCard">
          <img className="goalImg" src={goalImg8} alt="UI/UX Design" />
        </div>
        <div className="goalCard">
          <img className="goalImg" src={goalImg9} alt="Website Development" />
          {/* <p className="goalTxt">Top customer Softare Devlopment company</p> */}
        </div>
        <div className="goalCard">
          <img
            className="goalImg"
            src={goalImg10}
            alt="Mobile App Development"
          />
        </div>
        <div className="goalCard">
          <img className="goalImg" src={goalImg11} alt="UI/UX Design" />
        </div>
        <div className="goalCard">
          <img className="goalImg" src={goalImg12} alt="UI/UX Design" />
        </div>
      </div>
    </section>
  );
};

export default Achivements;
