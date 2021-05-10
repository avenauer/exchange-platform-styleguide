import React from "react";
import { MarketWatchSortStyled } from "./_components";
import SortDefault from "../../../assets/icons/sort-default.svg";
import SortBottom from "../../../assets/icons/sort-bottom.svg";
import { InsetPadding, LightSpan } from "../../mainComponents";

const MarketWatchSort = () => {
  return (
    <MarketWatchSortStyled>
      <LightSpan className="symbol-sort">
        Symbol
        <img src={SortDefault} alt="" />
      </LightSpan>
      <LightSpan className="index-price-sort">
        Index Price
        <img src={SortDefault} alt="" />
      </LightSpan>
      <LightSpan className="change-sort">
        24H Change
        <img src={SortBottom} alt="" />
      </LightSpan>
    </MarketWatchSortStyled>
  );
};

export default MarketWatchSort;
