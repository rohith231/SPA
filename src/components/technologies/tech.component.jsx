/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable array-callback-return */
import React, { useState } from "react";
import { connect } from "react-redux";
import { Nav, Row, Container } from "react-bootstrap";
import TechCard from "./techCard.component";
import nodejs from "../../assets/icons/nodejs.png";
import react from "../../assets/icons/react.png";
import mongoDB from "../../assets/icons/mongoDB.png";
import css from "../../assets/icons/css.png";
import html from "../../assets/icons/html.png";
import java from "../../assets/icons/java.png";
import angular from "../../assets/icons/angular.png";
import php from "../../assets/icons/php.png";
import sass from "../../assets/icons/sass.png";
import swift from "../../assets/icons/swift.png";
import nextjs from "../../assets/icons/nextjs.png";
import springboot from "../../assets/icons/springboot.png";
import sql from "../../assets/icons/sql.png";
import postgresql from "../../assets/icons/postgresql.png";
import "./tech.styles.css";

const techStacks = [
  {
    name: "Node JS",
    category: "backend",
    img: nodejs,
  },
  {
    name: "React JS",
    category: "frontend",
    img: react,
  },
  {
    name: "MongoDB",
    category: "database",
    img: mongoDB,
  },
  {
    name: "HTML",
    category: "frontend",
    img: html,
  },
  {
    name: "CSS",
    category: "frontend",
    img: css,
  },
  {
    name: "Java",
    category: "mobile",
    img: java,
  },
  {
    name: "Angular",
    category: "frontend",
    img: angular,
  },
  {
    name: "PHP",
    category: "backend",
    img: php,
  },
  {
    name: "SASS",
    category: "frontend",
    img: sass,
  },
  {
    name: "Swift",
    category: "mobile",
    img: swift,
  },
  {
    name: "NextJs",
    category: "frontend",
    img: nextjs,
  },
  {
    name: "React Native",
    category: "mobile",
    img: react,
  },
  {
    name: "Spring Boot",
    category: "backend",
    img: springboot,
  },
  {
    name: "SQL",
    category: "database",
    img: sql,
  },
  {
    name: "PostgreSQL",
    category: "database",
    img: postgresql,
  },
];

const TechStack = (props) => {
  const [activeTab, setActiveTab] = useState("all");
  return (
    <section id="tech-stack">
      <h4 className="sectionHeader">Technologies, We are working on</h4>
      <p className="sectionBody">
        Start working with{" "}
        <span className="sectionLinkText">
          <a href="" className="text-foot">
            {" "}
            Istellar
          </a>
        </span>{" "}
        There are several factors to consider when putting a technology stack
        together including cost of the software and availability of
        professionals to support your project.
      </p>
      <Nav className="techno-nav" variant="pills" defaultActiveKey="all">
        <Nav.Item onClick={() => setActiveTab("all")}>
          <Nav.Link eventKey="all">All</Nav.Link>
        </Nav.Item>
        <Nav.Item onClick={() => setActiveTab("frontend")}>
          <Nav.Link eventKey="frontend">FrontEnd JS</Nav.Link>
        </Nav.Item>
        <Nav.Item onClick={() => setActiveTab("backend")}>
          <Nav.Link eventKey="backend">BackEnd JS</Nav.Link>
        </Nav.Item>
        <Nav.Item onClick={() => setActiveTab("mobile")}>
          <Nav.Link eventKey="mobile">Mobile</Nav.Link>
        </Nav.Item>
        <Nav.Item onClick={() => setActiveTab("database")}>
          <Nav.Link eventKey="database">Database</Nav.Link>
        </Nav.Item>
      </Nav>
      <div className="tech-display">
        {activeTab === "all" ? (
          <Container className="tech-grid">
            <Row className="row">
              {techStacks.map((tech) => (
                <TechCard key={tech.name} {...tech} />
              ))}
            </Row>
          </Container>
        ) : null}

        {activeTab === "frontend" ? (
          <Container className="tech-grid">
            <Row className="row">
              {techStacks.map((tech) => {
                if (tech.category === "frontend") {
                  return <TechCard key={tech.name} {...tech} />;
                }
              })}
            </Row>
          </Container>
        ) : null}

        {activeTab === "backend" ? (
          <Container className="tech-grid">
            <Row className="row">
              {techStacks.map((tech) => {
                if (tech.category === "backend") {
                  return <TechCard key={tech.name} {...tech} />;
                }
              })}
            </Row>
          </Container>
        ) : null}

        {activeTab === "mobile" ? (
          <Container className="tech-grid">
            <Row className="row">
              {techStacks.map((tech) => {
                if (tech.category === "mobile") {
                  return <TechCard key={tech.name} {...tech} />;
                }
              })}
            </Row>
          </Container>
        ) : null}

        {activeTab === "database" ? (
          <Container className="tech-grid">
            <Row className="row">
              {techStacks.map((tech) => {
                if (tech.category === "database") {
                  return <TechCard key={tech.name} {...tech} />;
                }
              })}
            </Row>
          </Container>
        ) : null}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TechStack);
