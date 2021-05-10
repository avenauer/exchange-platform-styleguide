import React from "react";
import {
  OrderbookColumnStyled,
  OrderbookHeadingCell,
  OrderbookStyled
} from "./_components";
import SpreadBar from "./SpreadBar";
import OrderbookAskColumn from "./OrderbookAskColumn";
import OrderbookBidColumn from "./OrderbookBidColumn";
import { Cell } from "../../Table/_components";
import { LightSpan } from "../../mainComponents";

const Orderbook = () => {
  return (
    <OrderbookStyled>
      <OrderbookHeadingCell>
        <Cell>
          <LightSpan>Price</LightSpan>
        </Cell>
        <Cell>
          <LightSpan>Quantity</LightSpan>
        </Cell>
        <Cell>
          <LightSpan>Time</LightSpan>
        </Cell>
      </OrderbookHeadingCell>
      <OrderbookAskColumn />
      <SpreadBar />
      {/*<OrderbookHeadingCell>
        <Cell>
          <LightSpan>Price</LightSpan>
        </Cell>
        <Cell>
          <LightSpan>Quantity</LightSpan>
        </Cell>
        <Cell>
          <LightSpan>Time</LightSpan>
        </Cell>
      </OrderbookHeadingCell>*/}
      <OrderbookBidColumn />
    </OrderbookStyled>
  );
};

export default Orderbook;
