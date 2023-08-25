import React from "react";
import CommonCard from "../../../../components/commonCard/commonCard.component";
import ServiceBG from "../../../../components/servicesBg/services-bg";
import {
  Contact,
  dualListItems,
  softwareTestingPara,
  testingServices,
} from "./SoftwareTesting.data";
import "./SoftwareTesting.styles.css";

function SoftwareTesting() {
  return (
    <>
      <ServiceBG
        title="Software Testing"
        page="Software Testing"
        pagePath="software-testing"
      />
      <CommonCard para={softwareTestingPara} />
      <CommonCard
        type="dualListItems"
        title="Some of the Testing tools we used,"
        data={dualListItems}
      />
      <CommonCard
        type="testingServices"
        title="Our Testing Services"
        data={testingServices}
        img="webtesting"
      />
      <CommonCard
        title="Need Software Developers? Contact us:"
        para={Contact}
        button="Contact Us"
      />
    </>
  );
}

export default SoftwareTesting;
