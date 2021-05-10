import React from "react";
import { SymbolCollateralIconStyled } from "./_components";

import LINK from "../../../../assets/symbol/LINK.svg";
import TUSD from "../../../../assets/symbol/TUSD.svg";

const SymbolCollateralIcon = () => {
  return (
    <SymbolCollateralIconStyled>
      <img className="quote-icon" src={TUSD} alt="" />
      <img className="base-icon" src={LINK} alt="" />
    </SymbolCollateralIconStyled>
  );
};

export default SymbolCollateralIcon;
