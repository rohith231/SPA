/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from "react";
import "./footer.styles.css";
import Logo from "../../assets/images/logo.png";
import facebook from "../../assets/icons/facebook.png";
import linkedin from "../../assets/icons/linkedin.png";
import instagram from "../../assets/icons/instagram.png";
import { Button, Form } from "react-bootstrap";
import { contactCard } from "../../pages/contact/Contact.data";
import { ourServices } from "../Navbar/Services/ourServices";
import { technologies } from "../Navbar/Services/technologies";
import { mobileDevelopment } from "../Navbar/Services/mobileDevelopment";
import { FaStar } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { Alert } from "@mui/material";
// import { Alert, AlertTitle } from "@mui/material";

export default function Footer() {
  const [alert, setAlert] = useState(false);
  const form = useRef();

  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 5000);
  }, [alert]);

  const sendEmail = (e) => {
    e.preventDefault();
    setAlert(true);
    console.log("SUBMITTED");
    // <Alert severity="success">
    //   <AlertTitle>Success</AlertTitle>
    //   This is a success alert — <strong>check it out!</strong>
    // </Alert>;

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <section id="footer">
        <div className="text-center text-md-start footer-secondary">
          <div className="row">
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto  column">
              <img className="footerLogo" src={Logo} alt="Logo" />
              <div className="col100 clutchdiv">
                <div className="clutch">
                  <span className="spanclutch">REVIEWED ON</span>
                  <div className="clutch-box">
                    <a className="clutcha"> </a>
                    <p>5.0</p>
                  </div>
                </div>
                <div className="col50">
                  <ul className="list-unstyled clutchstar">
                    <li>
                      <FaStar icon="star" />
                    </li>
                    <li>
                      <FaStar icon="star" />
                    </li>
                    <li>
                      <FaStar icon="star" />
                    </li>
                    <li>
                      <FaStar icon="star" />
                    </li>
                    <li>
                      <FaStar icon="star" />
                    </li>
                  </ul>
                  <span className="spanclutch">75 REVIEWS</span>
                </div>
              </div>
              <h6 className="text-uppercase fw-bold  footerSubHeader">
                Contact
              </h6>
              <div className="contact-card">
                {contactCard.map((e) => (
                  <div className="contact-card-box" key={e.id}>
                    <h4>
                      {e.imgSrc && (
                        <img src={e.imgSrc} alt="flag" className="flag-icon" />
                      )}
                      {e.country && e.country}
                    </h4>
                    <h3>{e.branch && e.branch}</h3>
                    <p className="para address footerSubText">{e.address}</p>
                    <p className="para blue-text footerSubText">{e.contact}</p>
                    <p className="para blue-text footerSubText">{e.mail}</p>
                  </div>
                ))}
              </div>
              <div className="social-media-icons">
                <a href="" className="text-reset">
                  <img src={facebook} alt="facebook" />
                </a>
                <a href="" className="text-reset">
                  <img src={instagram} alt="instagram" />
                </a>
                <a
                  href="https://www.linkedin.com/company/istellar-labs/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-reset"
                >
                  <img src={linkedin} alt="linkedin" />
                </a>
              </div>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto  column">
              <h6 className="text-uppercase fw-bold  footerSubHeader">
                Our Services
              </h6>
              {ourServices.map((e) => (
                <p className="text-reset footerSubText" key={e.id}>
                  <a href={e.href}>{e.title}</a>
                </p>
              ))}
              <h6 className="text-uppercase fw-bold  footerSubHeader">
                Technologies
              </h6>
              {technologies.map((e) => (
                <p className="text-reset footerSubText" key={e.href}>
                  <a href={e.href}>{e.title}</a>
                </p>
              ))}
              <h6 className="text-uppercase fw-bold  footerSubHeader">
                Mobile Development
              </h6>
              {mobileDevelopment.map((e) => (
                <p className="text-reset footerSubText" key={e.title}>
                  <a href={e.href}>{e.title}</a>
                </p>
              ))}
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto  column">
              <h6 className="text-uppercase fw-bold  footerSubHeader">
                Useful links
              </h6>
              <Form className="contact-us" ref={form} onSubmit={sendEmail}>
                <div className="contactWrapper">
                  <Form.Group className="mb-3 form-group">
                    <Form.Label className="contactSubText">
                      Name <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="user_name"
                      placeholder="Enter Your Name"
                      className="customInput"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3 form-group">
                    <Form.Label className="contactSubText">
                      Email address <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="email"
                      name="user_email"
                      placeholder="Enter your email"
                      className="customInput"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3 form-group">
                    <Form.Label className="contactSubText">
                      Contact Number <span className="text-danger"></span>
                    </Form.Label>
                    <Form.Control
                      type="tel"
                      name="contact"
                      placeholder="Enter your Contact Number"
                      className="customInput"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3 form-group">
                    <Form.Label className="contactSubText">
                      Message <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows="10"
                      name="message"
                      className="customInput"
                      placeholder="Enter Your Message"
                      required
                    />
                  </Form.Group>
                  {alert && <Alert severity="success">Message Sent!</Alert>}
                  <Form.Group className="mb-3 form-group submit">
                    <Button variant="primary" type="submit" value="Send">
                      Submit
                    </Button>
                  </Form.Group>
                </div>
              </Form>
            </div>
          </div>
          <div className="footer-bar">
            <div className="copyright flexit pad-50">
              <p>
                © {new Date().getFullYear()} Copyright : &nbsp;{" "}
                {/* To add space after the colon*/}
                <a
                  className="text-reset fw-bold"
                  href="https://mdbootstrap.com/"
                >
                  Istellar Labs
                </a>
              </p>
            </div>
            <div className="copyright flexit pad-50">
              <div className="footerSubText">
                <a href="/">Home</a> <span>| </span>
                <a href="/about-us">About Us</a> <span>| </span>
                <a href="/careers">Careers</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
