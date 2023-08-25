import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Figure from "react-bootstrap/Figure";
import SlideImage5 from "../../assets/images/home/mobile.png";
import "./homeCarousel.styles.css";

const Slide6 = () => {
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
                <h1 className="heading mb-3 animated fadeInDownBig animation-delay-1 slideHeader slide5 heading1">
                  Mobile Development.
                </h1>
                <h3 className="slideText5 h3Bold">
                  Cross-platform Mobile Apps
                </h3>
                <p className="slideBodyText slideText5">
                  We have experts in creating multi-platform mobile app
                  solutions for both Android and iOS devices. Using React
                  Native, PhoneGap and Xamarin, we offer custom app development
                  that runs smoothly on multiple platforms.
                </p>
                <div className="mt-4 pt-2 slideBodyCTA slideCTA5">
                  <a
                    href="/services/mobile-development"
                    // target="_blank"
                    rel="noopener"
                    className="btn btn-primary CTAbtn"
                  >
                    <i className="visually-hidden">Mobile development</i>
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
                      alt="Mobile Development"
                      src={SlideImage5}
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
export default Slide6;
