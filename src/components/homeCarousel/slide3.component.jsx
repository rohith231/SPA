import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Figure from "react-bootstrap/Figure";
import SlideImage2 from "../../assets/images/home/React-hero.png";
import "./homeCarousel.styles.css";

const Slide3 = () => {
  return (
    <div className="bgImg">
      <section className="section100">
        <Container>
          <Row className="pad180">
            <Col
              xs={12}
              sm={6}
              md={6}
              lg={7}
              xl={7}
              xxl={7}
              className="colHeight"
            >
              <div className="title-heading mt-4">
                <h1 className="heading mb-3 animated fadeInDownBig animation-delay-1 slideHeader slide2 heading1">
                  ReactJS Development.
                </h1>
                <p className="slideBodyText slideText2">
                  Exposure in ReactJS/Redux, D3, ES6/ES7, Webpack, babel.
                  Experience in Test driven development process in
                  Jest,enzyme,Chai,Mocha,Should.js..etc
                </p>
                <div className="mt-4 pt-2 slideBodyCTA slideCTA2">
                  <a
                    href="/services/reactjs-development"
                    // target="_blank"
                    rel="noopener"
                    className="btn btn-primary CTAbtn"
                  >
                    <i className="visually-hidden">
                      ReactJS redux development services
                    </i>
                    More &gt;&gt;
                  </a>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={6} md={6} lg={5} xl={5} xxl={5}>
              <div className="freelance-hero position-relative">
                <div className="bg-shape position-relative">
                  <Figure>
                    <Figure.Image
                      width="100%"
                      height="400px"
                      alt="ReactJS Development"
                      src={SlideImage2}
                      className="slideImg react-img"
                    />
                  </Figure>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};
export default Slide3;
