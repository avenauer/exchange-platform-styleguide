import React from "react";
import { SpreadBarStyled } from "./_components";
import { BiggerSpan, GraySpan, LightSpan } from "../../mainComponents";
import { themes } from "../../theming";
import SortTop from "../../../assets/icons/sort-top.svg";

const SpreadBar = () => {
  return (
    <SpreadBarStyled>
      <GraySpan>
        Index Price
        <p>0.002</p>
      </GraySpan>
      <GraySpan>
        Last Price
        <p style={{ color: themes.dark.color.deepgreen.deepgreen }}>
          <img src={SortTop} alt="" />
          0.002
        </p>
      </GraySpan>
      {/*<GraySpan>
        Mark Price
        <LightSpan>0.002</LightSpan>
      </GraySpan>*/}
    </SpreadBarStyled>
  );
};

export default SpreadBar;
