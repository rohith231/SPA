import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Figure from "react-bootstrap/Figure";
import SlideImage4 from "../../assets/images/home/Data_visualization_D3JS.png";
import "./homeCarousel.styles.css";

const Slide5 = () => {
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
                <h1 className="heading mb-3 animated fadeInDownBig animation-delay-1 slideHeader slide4 heading1">
                  React Native Development.
                </h1>
                <p className="slideBodyText slideText4">
                  Our experts Transform your raw data into stunning
                  visualizations.
                </p>
                <div className="mt-4 pt-2 slideBodyCTA slideCTA4">
                  <a
                    href="/services/react-native-development"
                    // target="_blank"
                    rel="noopener"
                    className="btn btn-primary CTAbtn"
                  >
                    <i className="visually-hidden">React Native development</i>
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
                      alt="React Native Development"
                      src={SlideImage4}
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
export default Slide5;
