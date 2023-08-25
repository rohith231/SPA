import React from "react";
import { Container } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

export default function TestimonialCard(props) {
  return (
    <Container className="testimonial-card">
      <div className="testimonialcon">
        <div className="clutcha"> </div>
        <p className="rating">5.0</p>
        <ul className="list-unstyled text-warning mb-0">
          <li>
            <FaStar icon="star" className="stars" />
          </li>
          <li>
            <FaStar icon="star" className="stars" />
          </li>
          <li>
            <FaStar icon="star" className="stars" />
          </li>
          <li>
            <FaStar icon="star" className="stars" />
          </li>
          <li>
            <FaStar icon="star" className="stars" />
          </li>
        </ul>
      </div>
      <h3>"{props.testimonial}"</h3>
      <div className="author">
        <p>{props.author}</p>
        <p className="position">{props.position}</p>
      </div>
    </Container>
  );
}
