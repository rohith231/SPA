import React from "react";
import { FaQuoteLeft, FaQuoteRight, FaUser,FaStar,FaStarHalfAlt } from 'react-icons/fa';
import ServiceBG from "../../../../src/components/servicesBg/services-bg";
import "./Testimonial.style.css";
import { Testimonial } from "./Testimonials.data";

const Testimonials = () => {
  return (
    <>
      <ServiceBG title="Testimonials" page="testimonials" pagePath="testimonials" solo />
      <section className="section">
        <div className="container">
          {Testimonial.map((e) => (
            <div key={e}>
              <h2 className="title">{e.title}</h2>
              <div className="style">
                <p className="text">
                  <ul className="list-unstyled starr">
                    <li><FaStar fas icon="star" size="sm" /></li>
                    <li><FaStar fas icon="star" size="sm" /></li>
                    <li><FaStar fas icon="star" size="sm" /></li>
                    <li><FaStar fas icon="star" size="sm" /></li>
                    <li><FaStarHalfAlt far icon="star" size="sm" /></li>
                  </ul>
                  <FaQuoteLeft />
                  {e.text}
                  <FaQuoteRight />
                </p>
                <div className="info">
                  <div className="name">
                    <FaUser />{e.name}
                  </div>
                  <div className="position">
                    {e.position}{e.title}
                  </div>
                  <div className="place">
                    {e.place}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Testimonials;