import React from "react";
import "./sliderLogo.styles.css";
import Slider from "react-slick";
import logo1 from "../../assets/images/home/Slider Logos/logo1.png";
import logo2 from "../../assets/images/home/Slider Logos/logo2.png";
import logo3 from "../../assets/images/home/Slider Logos/logo3.png";
import logo4 from "../../assets/images/home/Slider Logos/logo4.png"; // matchsquare
import logo5 from "../../assets/images/home/Slider Logos/logo5.png";
import logo6 from "../../assets/images/home/Slider Logos/logo6.png";
import logo7 from "../../assets/images/home/Slider Logos/logo7.png";
import logo8 from "../../assets/images/home/Slider Logos/logo8.png";
import logo9 from "../../assets/images/home/Slider Logos/logo9.png"; // arizona lotter
import logo10 from "../../assets/images/home/Slider Logos/logo10.png"; // telemed2u
// import logo11 from "../../assets/images/home/Slider Logos/logo11.png"; //kayo auto

function LogoSlider() {
  const settings = {
    infinite: true,
    autoplay: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
  };
  return (
    <div className="slider-container">
      <div className="slider-header">
        <hr />
        <h5>TRUSTED BY ENTERPRISES AND STARTUPS ALIKE</h5>
        <hr />
      </div>
      <div className="sliderParent">
        <Slider {...settings} className="logo-slider">
          <div className="sliderItem">
            <img src={logo1} alt="logo1" srcSet="" />
          </div>
          <div className="sliderItem">
            <img src={logo2} alt="logo2" srcSet="" />
          </div>
          <div className="sliderItem">
            <img src={logo3} alt="logo3" srcSet="" />
          </div>
          <div className="sliderItem">
            <img src={logo5} alt="logo5" srcSet="" />
          </div>
          <div className="sliderItem">
            <img src={logo6} alt="logo6" srcSet="" />
          </div>
          <div className="sliderItem">
            <img src={logo7} alt="logo7" srcSet="" />
          </div>
          <div className="sliderItem">
            <img src={logo4} alt="logo4" srcSet="" />
          </div>
          <div className="sliderItem">
            <img src={logo8} alt="logo8" srcSet="" />
          </div>
          <div className="sliderItem">
            <img src={logo9} alt="logo9" srcSet="" />
          </div>
          <div className="sliderItem">
            <img src={logo10} alt="logo10" srcSet="" />
          </div>
          {/* <div className="sliderItem">
          <img src={logo11} alt="logo11" srcSet="" />
        </div> */}
        </Slider>
      </div>
    </div>
  );
}
export default LogoSlider;
