import React from "react";
import {
  RecentHeadingCell,
  RecentTradesContentStyled,
  RecentTradesStyled
} from "./_components";
import {
  Cell,
  Heading,
  Row,
  TableBody,
  TableStyled
} from "../../Table/_components";
import { themes } from "../../theming";
import { LightSpan } from "../../mainComponents";
import {
  OrderbookContentStyled,
  OrderbookHeadingCell
} from "../Orderbook/_components";

const RecentTrades = () => {
  return (
    <RecentTradesStyled>
      <OrderbookHeadingCell>
        <RecentHeadingCell>
          <LightSpan>Price</LightSpan>
        </RecentHeadingCell>
        <RecentHeadingCell>
          <LightSpan>Qty</LightSpan>
        </RecentHeadingCell>
        <RecentHeadingCell>
          <LightSpan>Time</LightSpan>
        </RecentHeadingCell>
      </OrderbookHeadingCell>
      <RecentTradesContentStyled>
        <Row>
          <Cell>
            <LightSpan style={{ color: themes.dark.color.red.red }}>
              8612.0
            </LightSpan>
          </Cell>
          <Cell>
            <h5 style={{ color: themes.dark.color.red.red }}>0.007</h5>
          </Cell>
          <Cell>
            <LightSpan>14:22:13</LightSpan>
          </Cell>
        </Row>
        <Row>
          <Cell>
            <LightSpan style={{ color: themes.dark.color.deepgreen.deepgreen }}>
              8612.0
            </LightSpan>
          </Cell>
          <Cell>
            <LightSpan style={{ color: themes.dark.color.deepgreen.deepgreen }}>
              0.007
            </LightSpan>
          </Cell>
          <Cell>
            <LightSpan>14:22:13</LightSpan>
          </Cell>
        </Row>
        <Row>
          <Cell>
            <LightSpan style={{ color: themes.dark.color.deepgreen.deepgreen }}>
              8612.0
            </LightSpan>
          </Cell>
          <Cell>
            <LightSpan style={{ color: themes.dark.color.deepgreen.deepgreen }}>
              0.007
            </LightSpan>
          </Cell>
          <Cell>
            <LightSpan>14:22:13</LightSpan>
          </Cell>
        </Row>
        <Row>
          <Cell>
            <LightSpan style={{ color: themes.dark.color.deepgreen.deepgreen }}>
              8612.0
            </LightSpan>
          </Cell>
          <Cell>
            <LightSpan style={{ color: themes.dark.color.deepgreen.deepgreen }}>
              0.007
            </LightSpan>
          </Cell>
          <Cell>
            <LightSpan>14:22:13</LightSpan>
          </Cell>
        </Row>
        <Row>
          <Cell>
            <LightSpan style={{ color: themes.dark.color.deepgreen.deepgreen }}>
              8612.0
            </LightSpan>
          </Cell>
          <Cell>
            <LightSpan style={{ color: themes.dark.color.deepgreen.deepgreen }}>
              0.007
            </LightSpan>
          </Cell>
          <Cell>
            <LightSpan>14:22:13</LightSpan>
          </Cell>
        </Row>
        <Row>
          <Cell>
            <LightSpan style={{ color: themes.dark.color.deepgreen.deepgreen }}>
              8612.0
            </LightSpan>
          </Cell>
          <Cell>
            <LightSpan style={{ color: themes.dark.color.deepgreen.deepgreen }}>
              0.007
            </LightSpan>
          </Cell>
          <Cell>
            <LightSpan>14:22:13</LightSpan>
          </Cell>
        </Row>
        <Row>
          <Cell>
            <LightSpan style={{ color: themes.dark.color.deepgreen.deepgreen }}>
              8612.0
            </LightSpan>
          </Cell>
          <Cell>
            <LightSpan style={{ color: themes.dark.color.deepgreen.deepgreen }}>
              0.007
            </LightSpan>
          </Cell>
          <Cell>
            <LightSpan>14:22:13</LightSpan>
          </Cell>
        </Row>
        <Row>
          <Cell>
            <LightSpan style={{ color: themes.dark.color.deepgreen.deepgreen }}>
              8612.0
            </LightSpan>
          </Cell>
          <Cell>
            <LightSpan style={{ color: themes.dark.color.deepgreen.deepgreen }}>
              0.007
            </LightSpan>
          </Cell>
          <Cell>
            <LightSpan>14:22:13</LightSpan>
          </Cell>
        </Row>
        <Row>
          <Cell>
            <LightSpan style={{ color: themes.dark.color.deepgreen.deepgreen }}>
              8612.0
            </LightSpan>
          </Cell>
          <Cell>
            <LightSpan style={{ color: themes.dark.color.deepgreen.deepgreen }}>
              0.007
            </LightSpan>
          </Cell>
          <Cell>
            <LightSpan>14:22:13</LightSpan>
          </Cell>
        </Row>
      </RecentTradesContentStyled>
    </RecentTradesStyled>
  );
};

export default RecentTrades;
