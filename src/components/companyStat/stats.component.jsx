import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiagramProject,
  faUsers,
  faUserTie,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import "./stats.styles.css";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Stats = (props) => {
  return (
    <section id="stats">
      <div className="stats-height">
        <Container>
          <Row>
            <Col lg={3} className="stats-card-box">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="stats-card"
              >
                <FontAwesomeIcon
                  icon={faDiagramProject}
                  className="fontAwIcon"
                />
                <h2 className="statTitle">
                  <CountUp start={0} end={280} redraw={true}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                  +
                </h2>
                <h6 className="statSubTitle">SUCCESSFUL PROJECTS</h6>
              </motion.div>
            </Col>
            <Col lg={3} className="stats-card-box">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="stats-card"
              >
                <FontAwesomeIcon icon={faUsers} className="fontAwIcon" />
                <h2 className="statTitle">
                  <CountUp start={0} end={150} redraw={true}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                  +
                </h2>
                <h6 className="statSubTitle">NO OF CLIENTS</h6>
              </motion.div>
            </Col>
            <Col lg={3} className="stats-card-box">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="stats-card"
              >
                <FontAwesomeIcon icon={faUserTie} className="fontAwIcon" />
                <h2 className="statTitle">
                  <CountUp start={0} end={50} redraw={true}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                  +
                </h2>
                <h6 className="statSubTitle">NO OF EMPLOYEE</h6>
              </motion.div>
            </Col>
            <Col lg={3} className="stats-card-box">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="stats-card"
              >
                <FontAwesomeIcon icon={faCode} className="fontAwIcon" />
                <h2 className="statTitle">
                  <CountUp start={0} end={10} redraw={true}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                  K+
                </h2>
                <h6 className="statSubTitle">HOURS OF CODING</h6>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Stats);
