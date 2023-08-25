import React from "react";
import "./KayoAuto.styles.css";
import {
  Contact,
  KayoAutodualListItems,
  KayoAutoIFrame,
  KayoAutoImg1,
  KayoAutoImg2,
  KayoAutoList,
  KayoAutoPara1,
  KayoAutoPara2,
  KayoAutoPara3,
  KayoAutoTitle1,
  KayoAutoTitle2,
  KayoAutoTitle3,
} from "./KayoAuto.data";
import CommonCard from "../../../components/commonCard/commonCard.component";
import ServiceBG from "../../../components/servicesBg/services-bg";

const KayoAuto = () => {
  return (
    <>
      <ServiceBG
        title="Kayo Auto"
        page="Kayo Auto"
        pagePath="/products/kayo-auto"
        solo
      />
      <CommonCard
        type="7030img"
        summary={KayoAutoPara1}
        title={KayoAutoTitle1}
        img={KayoAutoImg2}
        ul={KayoAutoList}
      />
      <CommonCard
        type="7030img"
        title={KayoAutoTitle2}
        para={KayoAutoPara2}
        img={KayoAutoImg1}
        data={KayoAutodualListItems}
      />
      <CommonCard
        type="7030img"
        title={KayoAutoTitle3}
        para={KayoAutoPara3}
        iframe={KayoAutoIFrame}
      />
      <CommonCard
        title="Need This Product? Contact us:"
        para={Contact}
        button="Contact Us"
      />
    </>
  );
};

export default KayoAuto;
