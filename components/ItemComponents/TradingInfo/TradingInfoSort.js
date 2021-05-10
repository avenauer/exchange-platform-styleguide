import React from "react";
import { TradingInfoSortStyled } from "./_components";
import SortDefault from "../../../assets/icons/sort-default.svg";
import { LightSpan } from "../../mainComponents";

const TradingInfoSort = () => {
  return (
    <TradingInfoSortStyled>
      <LightSpan>
        Symbol
        <img src={SortDefault} alt="" />
      </LightSpan>
      <LightSpan>
        Quantity
        <img src={SortDefault} alt="" />
      </LightSpan>
      <LightSpan>
        Value
        <img src={SortDefault} alt="" />
      </LightSpan>
      <LightSpan>
        Avg. Entry Price
        <img src={SortDefault} alt="" />
      </LightSpan>
      <LightSpan>
        Mark Price
        <img src={SortDefault} alt="" />
      </LightSpan>
      <LightSpan>
        Approx. Liq. Price
        <img src={SortDefault} alt="" />
      </LightSpan>
      <LightSpan>
        Unrealised PNL (ROI%)
        <img src={SortDefault} alt="" />
      </LightSpan>
      <LightSpan>
        Realised PNL
        <img src={SortDefault} alt="" />
      </LightSpan>
      <LightSpan>
        Close Actions
        <img src={SortDefault} alt="" />
      </LightSpan>
    </TradingInfoSortStyled>
  );
};

export default TradingInfoSort;
