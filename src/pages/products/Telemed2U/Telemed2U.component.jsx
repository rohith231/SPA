import React from "react";
import "./Telemed2U.styles.css";
import {
  Contact,
  Telemed2UdualListItems,
  Telemed2UIFrame,
  Telemed2UImg1,
  Telemed2UImg2,
  Telemed2UList,
  Telemed2UPara1,
  Telemed2UPara2,
  Telemed2UTitle1,
  Telemed2UTitle2,
} from "./Telemed2U.data";
import CommonCard from "../../../components/commonCard/commonCard.component";
import ServiceBG from "../../../components/servicesBg/services-bg";

const Telemed2U = () => {
  return (
    <>
      <ServiceBG
        title="Telemed2U"
        page="Telemed2U"
        pagePath="/products/arizona-Lottery"
        solo
      />
      <CommonCard
        type="7030img"
        para={Telemed2UPara1}
        title={Telemed2UTitle1}
        img={Telemed2UImg1}
      />
      <CommonCard
        type="7030img"
        title={Telemed2UTitle2}
        para={Telemed2UPara2}
        img={Telemed2UImg2}
        // data={Telemed2UdualListItems}
        ul={Telemed2UList}
      />
      <CommonCard
        type="7030img"
        title={Telemed2UTitle2}
        para={Telemed2UPara2}
        data={Telemed2UdualListItems}
        iframe={Telemed2UIFrame}
      />
      <CommonCard
        title="Need This Product? Contact us:"
        para={Contact}
        button="Contact Us"
      />
    </>
  );
};

export default Telemed2U;
