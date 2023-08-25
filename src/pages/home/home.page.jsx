import React from "react";
import "./home.styles.css";
import HomeCarousel from "../../components/homeCarousel/homeCarousel.component";
import LogoSlider from "../../components/sliderLogos/sliderLogo.component";
import Services from "../../components/services/services.comp";
import WorkSpec from "../../components/workSpec/workSpec.component";
import Stats from "../../components/companyStat/stats.component";
import TechStack from "../../components/technologies/tech.component";
import Testimonials from "../../components/testimonials/testimonials.component";
import WhoWeWorkWith from "../../components/whoWeWorkWith/whoWeWorkWith.component";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs.component";
import Achivements from "../../components/Achivements/achivements.component";
import WeAreFuture from "../../components/weAreFuture/WeAreFuture.component";

const Home = () => {
  return (
    <>
      <HomeCarousel />
      <LogoSlider />
      <div className="home-bg">
        <WorkSpec />
        <WhoWeWorkWith />
        <Stats />
        <TechStack />
        <WhyChooseUs />
        <WeAreFuture />
        <Services />
        <Testimonials />
        <Achivements />
      </div>
    </>
  );
};
export default Home;
