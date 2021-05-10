import React from "react";
import { PairListInfoGroupStyled } from "./_components";
import Blob from "../../../../assets/images/deepblue-2.svg";
import SymbolCollateralIcon from "./SymbolCollateralIcon";
import PairListCurrentSymbolInfo from "./PairListCurrentSymbolInfo";
import PairListBottomInfo from "./PairListBottomInfo";

const PairListInfoGroup = () => {
  return (
    <PairListInfoGroupStyled>
      <img className="overflow-image" src={Blob} alt="" />
      <div className="overflow-gradient" />
      <>
        <SymbolCollateralIcon />
        <PairListCurrentSymbolInfo />
        <PairListBottomInfo />
      </>
    </PairListInfoGroupStyled>
  );
};

export default PairListInfoGroup;
