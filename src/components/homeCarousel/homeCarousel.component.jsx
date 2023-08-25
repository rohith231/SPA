import React from "react";
import { Carousel } from "react-bootstrap";
import Slide1 from "./slide1.component";
import Slide2 from "./slide2.component";
import Slide3 from "./slide3.component";
import Slide4 from "./slide4.component";
import Slide5 from "./slide5.component";
import Slide6 from "./slide6.component";
import "./homeCarousel.styles.css";

const HomeCarousel = () => {
  return (
    <Carousel
      className="home-carousel"
      variant="dark"
      indicators={false}
      slide={true}
    >
      <Carousel.Item interval={3000}>
        <Slide1 />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <Slide2 />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <Slide3 />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <Slide4 />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <Slide5 />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <Slide6 />
      </Carousel.Item>
    </Carousel>
  );
};
export default HomeCarousel;
