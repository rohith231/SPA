import React from "react";
import { connect } from "react-redux";
import "./FooterBG.styles.css";

const ContactUs = (props) => {
  return (
    <section className="contact">
      <p class="box-contact">
        <span class="content"></span>
      </p>
    </section>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ContactUs);
