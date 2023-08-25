import React from "react";
import "./testimonials.styles.css";
import { connect } from "react-redux";
import Slider from "react-slick";
import TestimonialCard from "./testCard.component";

const testimonials = [
  {
    author: "Nikhil Khosla",
    position: "CEO - SENECA (US)",
    testimonial:
      "We have doubled our conversion in just one month. That is the most direct metric of our success.",
  },
  {
    author: "Deborah Haust",
    position: "lead marketing adviser - atlantic sapphire (us)",
    testimonial:
      "I have worked witn so many different website companies. This was the most resfreshing experience i have had.",
  },
  {
    author: "Michael Puterbaugh",
    position: "cmo - pathlock (us)",
    testimonial:
      "Their responsiveness, communications, and delivery were excellent.",
  },
  {
    author: "Sharde Heim",
    position: "product designer - curious thing (au)",
    testimonial:
      "The communicationk was exceptional. I was not used to dealing with such great follow-up.",
  },
  {
    author: "Jorden Williams",
    position: "ceo & co-founder - appointed furniture (us)",
    testimonial:
      "The most impressive thing about them was their blend of creative and technical abilities.",
  },
];
const Testimonials = (props) => {
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    autoplay: true,
  };
  return (
    <section id="testimonials">
      <h1 className="subHeader">Testimonials</h1>
      <div className="line div-block"></div>
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial}>
            <TestimonialCard {...testimonial} />
          </div>
        ))}
      </Slider>
    </section>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Testimonials);
