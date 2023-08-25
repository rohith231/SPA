import React from "react";
import "./ArizonaLottery.styles.css";
import {
  Contact,
  ArizonaLotteryIFrame,
  ArizonaLotteryPara1,
  ArizonaLotteryPara2,
  ArizonaLotteryTitle1,
  ArizonaLotteryTitle2,
  ArizonaLotteryPara3,
  ArizonaLotteryTitle3,
  ArizonaLotteryTitle4,
  ArizonaLotteryPara4,
  ArizonaLotteryTitle5,
  ArizonaLotteryPara5,
  ArizonaLotterydualListItems,
  ArizonaLotteryImg1,
  ArizonaLotteryImg2,
  ArizonaLotteryImg3,
  ArizonaLotteryImg4,
} from "./ArizonaLottery.data";
import CommonCard from "../../../components/commonCard/commonCard.component";
import ServiceBG from "../../../components/servicesBg/services-bg";

const ArizonaLottery = () => {
  return (
    <>
      <ServiceBG
        title="ArizonaLottery"
        page="ArizonaLottery"
        pagePath="/products/arizona-Lottery"
        solo
      />
      <CommonCard
        type="7030img"
        title={ArizonaLotteryTitle1}
        img={ArizonaLotteryImg1}
        para={ArizonaLotteryPara1}
      />
      <CommonCard
        type="7030img"
        title={ArizonaLotteryTitle2}
        para={ArizonaLotteryPara2}
        img={ArizonaLotteryImg2}
      />
      <CommonCard
        type="7030img"
        title={ArizonaLotteryTitle3}
        para={ArizonaLotteryPara3}
        img={ArizonaLotteryImg3}
      />
      <CommonCard
        type="7030img"
        title={ArizonaLotteryTitle4}
        para={ArizonaLotteryPara4}
        img={ArizonaLotteryImg4}
      />
      <CommonCard
        type="7030img"
        title={ArizonaLotteryTitle5}
        para={ArizonaLotteryPara5}
        data={ArizonaLotterydualListItems}
        iframe={ArizonaLotteryIFrame}
      />
      <CommonCard
        title="Need This Product? Contact us:"
        para={Contact}
        button="Contact Us"
      />
    </>
  );
};

export default ArizonaLottery;
