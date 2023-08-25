import React from "react";
// import CommonCard from '../../../../src/components/commonCard/commonCard.component';
import ServiceBG from "../../../../src/components/servicesBg/services-bg";
import "./AboutUs.style.css";
// import "../../../../src/components/commonCard/commonCard.styles.css";
import { AboutPara, AboutPara1, list} from "./AboutUs.data";

const AboutUs = () => {
  return (
    <>
      <ServiceBG title="About Us" page="About Us" pagePath="about-us" solo />
      {/* <CommonCard  data={AboutPara} title="Enthusiasm spells the difference between mediocrity and accomplishment." data1={AboutPara1} title1="Our services" li={list}/> */}
      <section className="section">
        <div className="container">
          <p>
            <b>Istellar</b>
            {AboutPara}
          </p>
          <h3>
            "Enthusiasm spells the difference between mediocrity and
            accomplishment."
          </h3>
          <p>
            <b>Istellar</b>
            {AboutPara1}
          </p>
          <h2>Our Services</h2>
          <div className="list">
            {list.map((e) => (
              <div key={e}>
                {e.ul.map((e) => (
                  <li>
                    <a href={e.path}>{e.li}</a>
                  </li>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
