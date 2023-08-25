import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Figure from "react-bootstrap/Figure";
import SlideImage1 from "../../assets/images/home/classic01.png";
import "./homeCarousel.styles.css";

const Slide2 = () => {
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
                <h1 className="heading mb-3 animated fadeInDownBig animation-delay-1 slideHeader slide1 heading1">
                  ColdFusion Development
                </h1>
                <p className="slideBodyText slideText1">
                  Experience in all CFML engines (Adobe ColdFusion, Railo &amp;
                  OpenBD)Exposure in all major CFML frameworks Coldbox,
                  CFWheels, FW1, Fusebox ...etc Expertise in OSS ColdFusion
                  applications (MuraCMS, ContentBox, CFShopKart ...etc)
                </p>
                <div className="mt-4 pt-2 slideBodyCTA slideCTA1">
                  <a
                    href="/services/coldfusion-development"
                    // target="_blank"
                    rel="noopener"
                    className="btn btn-primary CTAbtn"
                  >
                    <i className="visually-hidden">
                      ColdFusion development services
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
                      alt="ColdFusion Development"
                      src={SlideImage1}
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
export default Slide2;
