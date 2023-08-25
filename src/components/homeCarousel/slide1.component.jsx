import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Figure from "react-bootstrap/Figure";
import SlideImage from "../../assets/images/home/Web-Design-Development.png";
import "./homeCarousel.styles.css";

const Slide1 = () => {
  const [words] = useState([
    "Innovative",
    "Creative",
    "Stunning",
    "Innovative",
  ]);
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
              <div className="title-heading mt-4 slide1" id="slide1">
                <div className="heading mb-3 animated fadeInDownBig animation-delay-1 slideHeader slide1 heading1">
                  <h1>Inspiring Businesses To Bring</h1>
                  <span className="slide1-span">
                    <div className="scroller">
                      <span>
                        {words[0]}
                        <br />
                        {words[1]}
                        <br />
                        {words[2]}
                        <br />
                        {words[3]}
                      </span>
                    </div>
                    <h1>Ideas To Life</h1>
                  </span>
                  <h4
                    style={{
                      fontFamily: "Libre Baskerville",
                      margin: 0,
                      padding: 0,
                      fontSize: "46px",
                    }}
                  >
                    &amp;
                  </h4>
                  <h4>
                    We help ambitious companies build successful digital
                    products.
                  </h4>
                </div>
                <div className="mt-4 pt-2 slideBodyCTA slideCTA1">
                  <a
                    href="/services/"
                    // target="_blank"
                    rel="noopener"
                    className="btn btn-primary CTAbtn"
                  >
                    <i className="visually-hidden">Web development services</i>
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
                      alt="ColdFusion Development"
                      src={SlideImage}
                      className="slideImg"
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
export default Slide1;
