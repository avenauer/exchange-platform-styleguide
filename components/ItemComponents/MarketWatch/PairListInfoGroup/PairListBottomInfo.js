import React from "react";
import { PairListBottomInfoStyled } from "./_components";
import { GraySpan, LightSpan } from "../../../mainComponents";

const PairListBottomInfo = () => {
  return (
    <PairListBottomInfoStyled>
      <div>
        <GraySpan>
          Contract Size:<LightSpan> 1 Link</LightSpan>
        </GraySpan>
        <GraySpan>
          Funding:<LightSpan>0%</LightSpan>
        </GraySpan>
      </div>
      <div>
        <GraySpan>
          24H volume:<LightSpan> 161,243.39 TUSD</LightSpan>
        </GraySpan>
        <GraySpan>
          Open interest:<LightSpan>41.84 QTY</LightSpan>
        </GraySpan>
      </div>
    </PairListBottomInfoStyled>
  );
};

export default PairListBottomInfo;
