import React from "react";
import { TradingInfoPaginationStyled } from "./_components";
import Pagination from "../../Pagination/Pagination";

const TradingInfoPagination = () => {
  return (
    <TradingInfoPaginationStyled>
      <Pagination>
        <a href="">1</a>
        <a href="">2</a>
        <a href="">3</a>
        <a href="">...</a>
        <a href="">9</a>
      </Pagination>
    </TradingInfoPaginationStyled>
  );
};

export default TradingInfoPagination;
