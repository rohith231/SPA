import React, { useEffect, useRef, useState } from "react";
import ServiceBG from "../../components/servicesBg/services-bg";
// import CommonCard from "../../../../src/components/commonCard/commonCard.component";
import "./Contact.styles.css";
import { contactCard } from "./Contact.data";
import facebook from "../../assets/icons/facebook.png";
import linkedin from "../../assets/icons/linkedin.png";
import instagram from "../../assets/icons/instagram.png";
import emailjs from "@emailjs/browser";
import { Alert } from "@mui/material";

const Contact = () => {
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
      <ServiceBG title="Contact" page="Contact" pagePath="contact" solo />
      <div className="contact-body">
        <div className="wid60">
          <form className="form" ref={form} onSubmit={sendEmail}>
            <h3>Get In Touch!</h3>
            <div className="form-tab">
              <label className="form-label">
                Your Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="user_name"
                placeholder="Enter Your Name"
                className="form-input"
                required
              />
            </div>
            <div className="form-tab">
              <label className="form-label">
                Email <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="user_email"
                placeholder="Enter Your Email Address"
                className="form-input"
                required
              />
            </div>
            <div className="form-tab">
              <label className="form-label">Contact Number</label>
              <input
                type="tel"
                name="contact"
                placeholder="Enter Your Contact"
                className="form-input"
              />
            </div>
            <div className="form-tab">
              <label className="form-label">
                Subject <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="subject"
                placeholder="Enter The Subject"
                className="form-input"
                required
              />
            </div>
            <div className="form-tab">
              <label className="form-label">
                Message <span className="text-danger">*</span>
              </label>
              <textarea
                type="text"
                rows="10"
                name="message"
                placeholder="Enter Your Message Here"
                className="form-input"
                required
              />
            </div>
            {alert && <Alert severity="success">Message Sent!</Alert>}
            <button type="submit" value="Send" className="button">
              Send Message
            </button>
          </form>
        </div>
        <div className="wid40">
          <h3>Contact Details</h3>
          <div className="contact-card">
            {contactCard.map((e) => (
              <div className="contact-card-box">
                <h4>
                  {e.imgSrc && (
                    <img src={e.imgSrc} alt="flag" className="flag-icon" />
                  )}
                  {e.country && e.country}
                </h4>
                <h3>{e.branch && e.branch}</h3>
                <p className="para address">{e.address}</p>
                <p className="para blue-text">{e.contact}</p>
                <p className="para blue-text">{e.mail}</p>
              </div>
            ))}
          </div>
          {/* <div className="socials-container">
            {socials.map((e) => (
              <a href={e.href}>
                <div className="socials" id={e.name}></div>
              </a>
            ))}
          </div> */}

          <div className="social-media-icons socials-container">
            <a href="/" className="text-reset">
              <img src={facebook} alt="facebook" />
            </a>
            <a href="/" className="text-reset">
              <img src={instagram} alt="instagram" />
            </a>
            <a
              href="https://www.linkedin.com/company/istellar-labs"
              target="_blank"
              rel="noreferrer"
              className="text-reset"
            >
              <img src={linkedin} alt="linkedin" />
            </a>
          </div>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30451.175695296246!2d78.3361286!3d17.4407044!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb934f133641eb%3A0x33a052f99def77de!2sWeWork%20Krishe%20Emerald!5e0!3m2!1sen!2sin!4v1675174322004!5m2!1sen!2sin"
        width="80%"
        height="400"
        title="map"
        style={{ border: 0, margin: "0 0 50px 0" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      {/* <CommonCard
        data={AboutPara}
        title="Enthusiasm spells the difference between mediocrity and accomplishment."
        data1={AboutPara1}
        title1="Our services"
        li={list}
      /> */}
    </>
  );
};

export default Contact;
