import React from "react";
import { AccountInfoStyled } from "./_components";
import { themes } from "../../theming";
import { BiggerSpan, GraySpan, LighterSpan, LightSpan } from "../../mainComponents";

const AccountInfo = () => {
  return (
    <AccountInfoStyled>
      <GraySpan>
        Balance:<LightSpan>20.40 TUSD</LightSpan>
      </GraySpan>
      <GraySpan>
        Equity:<LightSpan>20.40 TUSD</LightSpan>
      </GraySpan>
      <GraySpan>
        Margin:<LightSpan>0.00</LightSpan>
      </GraySpan>
      <GraySpan>
        Free Margin:
        <LightSpan style={{ color: themes.dark.color.deepgreen.deepgreen }}>
          20.40
        </LightSpan>
      </GraySpan>
      <GraySpan>
        Margin level:
        <LightSpan style={{ color: themes.dark.color.deepgreen.deepgreen }}>
          100.00%
        </LightSpan>
      </GraySpan>
      <GraySpan>
        Unrealised PNL:<LightSpan>0.00</LightSpan>
      </GraySpan>
      <GraySpan>
        Leverage:<LightSpan>1:1.00</LightSpan>
      </GraySpan>
    </AccountInfoStyled>
  );
};

export default AccountInfo;
