import React from "react";
import { MarketWatchSearchBarStyled } from "./_components";
import InputSearch from "../../Inputs/InputSearch";

const MarketWatchSearchBar = () => {
  return (
    <MarketWatchSearchBarStyled>
      <InputSearch placeholder="Search" />
    </MarketWatchSearchBarStyled>
  );
};

export default MarketWatchSearchBar;
