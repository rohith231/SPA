import React from "react";
import "./MatchSquare.styles.css";
import {
  Contact,
  MatchSquaredualListItems,
  MatchSquareIFrame,
  MatchSquareImg1,
  MatchSquareImg2,
  MatchSquarePara1,
  MatchSquarePara2,
  MatchSquarePara3,
  MatchSquarePara4,
  MatchSquareTitle2,
  MatchSquareTitle3,
  MatchSquareTitle4,
} from "./MatchSquare.data";
import CommonCard from "../../../components/commonCard/commonCard.component";
import ServiceBG from "../../../components/servicesBg/services-bg";

const MatchSquare = () => {
  return (
    <>
      <ServiceBG
        title="MatchSquare"
        page="MatchSquare"
        pagePath="/products/matchsquare"
        solo
      />
      <CommonCard type="7030img" summary={MatchSquarePara1} />
      <CommonCard
        type="7030img"
        title={MatchSquareTitle2}
        para={MatchSquarePara2}
        img={MatchSquareImg1}
        data={MatchSquaredualListItems}
      />
      <CommonCard
        type="7030img"
        title={MatchSquareTitle3}
        para={MatchSquarePara3}
        img={MatchSquareImg2}
      />
      <CommonCard
        type="7030img"
        title={MatchSquareTitle4}
        para={MatchSquarePara4}
        iframe={MatchSquareIFrame}
      />
      <CommonCard
        title="Need This Product? Contact us:"
        para={Contact}
        button="Contact Us"
      />
    </>
  );
};

export default MatchSquare;
