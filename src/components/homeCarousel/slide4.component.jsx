import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Figure from "react-bootstrap/Figure";
import SlideImage3 from "../../assets/images/home/NodeJS.png";
import "./homeCarousel.styles.css";

const Slide4 = () => {
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
                <h1 className="heading mb-3 animated fadeInDownBig animation-delay-1 slideHeader slide3 heading1">
                  NodeJS Development.
                </h1>
                <p className="slideBodyText slideText3">
                  Expertise in NodeJS - ExpressJS, HapiJS, KoaJS and other
                  NodeJS Frameworks , Experience in GraphQL, MongoDB, Postgres
                  SQL, MySQL
                </p>
                <div className="mt-4 pt-2 slideBodyCTA slideCTA3">
                  <a
                    href="/services/nodejs-development"
                    // target="_blank"
                    rel="noopener"
                    className="btn btn-primary CTAbtn"
                  >
                    <i className="visually-hidden">
                      nodejs express hapi koa development
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
                      alt="NodeJS Development"
                      src={SlideImage3}
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
export default Slide4;
