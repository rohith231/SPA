import React from "react";
import {
  Contact,
  dualListItems,
  Para1,
  Para2,
  Title1,
  Title2,
  Title3,
  Title4,
} from "./FreshersJob.data";
import CommonCard from "../../../../components/commonCard/commonCard.component";
import ServiceBG from "../../../../components/servicesBg/services-bg";

const FreshersJob = () => {
  return (
    <>
      <ServiceBG
        title="Freshers Job"
        page="Freshers Job"
        pagePath="/careers/freshers-job"
        solo
      />
      <CommonCard type="7030img" title={Title1} />
      <CommonCard
        type="7030img"
        title={Title2}
        heading="heading3"
        para={Para1}
      />
      <CommonCard
        type="7030img"
        title={Title3}
        heading="heading3"
        ul={dualListItems}
      />
      <CommonCard
        type="7030img"
        title={Title4}
        heading="heading3"
        para={Para2}
        pClass="textLeft m0"
      />
      <CommonCard
        type="7030img"
        title="Contact us"
        heading="heading3"
        para={Contact}
        pClass="textLeft m0"
      />
      <br></br>
    </>
  );
};

export default FreshersJob;
