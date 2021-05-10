import React from "react";
import { PairListCurrentSymbolInfoStyled } from "./_components";
import SortTop from "../../../../assets/icons/sort-top.svg";
import { themes } from "../../../theming";
import { BiggerSpan, LightSpan } from "../../../mainComponents";

const PairListCurrentSymbolInfo = () => {
  return (
    <PairListCurrentSymbolInfoStyled>
      <LightSpan>LINK / TUSD</LightSpan>
      <BiggerSpan>85.00536</BiggerSpan>
      <div>
        <BiggerSpan style={{ color: themes.dark.color.deepgreen.deepgreen }}>
          <img src={SortTop} alt="" />
          3.54%
        </BiggerSpan>
      </div>
    </PairListCurrentSymbolInfoStyled>
  );
};

export default PairListCurrentSymbolInfo;
