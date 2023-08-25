import React from "react";
// import CommonCard from '../../../../src/components/commonCard/commonCard.component';
import ServiceBG from "../../../components/servicesBg/services-bg";
import "./Careers.styles.css";
import { FreshersJob, JobData } from "./Careers.data";
import CommonCard from "../../../components/commonCard/commonCard.component";
import CareersCard from "./CareersCard";

const Careers = () => {
  return (
    <>
      <ServiceBG title="Careers" page="Careers" pagePath="careers" solo />
      <CommonCard type="7030img" title="All Jobs" heading="h3 textLeft" />
      <hr className="Careers-HR"></hr>
      <div className="Careers-Card-Container centerIt makeItBig">
        {FreshersJob.map((e) => {
          return (
            <CareersCard
              title={e.title}
              icon={e.icon}
              address={e.Address}
              experience={e.Experience}
              workingHours={e.WorkingHours}
              details={e.Details}
              class="makeItBig Careers-Card"
            />
          );
        })}
      </div>
      <div className="Careers-Card-Container">
        {JobData.map((e) => {
          return (
            <CareersCard
              title={e.title}
              icon={e.icon}
              address={e.Address}
              experience={e.Experience}
              workingHours={e.WorkingHours}
              details={e.Details}
            />
          );
        })}
      </div>
      {/* <CommonCard  data={AboutPara} title="Enthusiasm spells the difference between mediocrity and accomplishment." data1={AboutPara1} title1="Our services" li={list}/> */}
    </>
  );
};

export default Careers;
