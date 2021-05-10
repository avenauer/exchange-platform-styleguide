import React from "react";
import { MarketWatchContainerStyled } from "./_components";
import SymbolItem from "./SymbolItem/SymbolItem";
import { Item } from "./defaultSymbol";

const MarketWatchContainer = () => {
  return (
    <MarketWatchContainerStyled>
     { Object.values(Item).map(obj=>{
       return <SymbolItem item={obj} />
     })}
    </MarketWatchContainerStyled>
  );
};

export default MarketWatchContainer;
