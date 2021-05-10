import React from "react";
import {
  ConnectionPointStyled,
  ConnectionPointWrapperStyled
} from "./_components";
import { Light } from "../../Fonts/_components";
import { GraySpan, LighterSpan, LightSpan } from "../../mainComponents";

const ConnectionPing = () => {
  return (
    <ConnectionPointWrapperStyled>
      <div>
        <ConnectionPointStyled signal />
        <ConnectionPointStyled signal />
        <ConnectionPointStyled />
      </div>
      <LightSpan>53 ms</LightSpan>
    </ConnectionPointWrapperStyled>
  );
};

export default ConnectionPing;
