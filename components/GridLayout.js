import React from "react";
import GridLayout from "react-grid-layout";
import MarketWatch from "./ItemComponents/MarketWatch/MarketWatch";
import TradingInfo from "./ItemComponents/TradingInfo/TradingInfo";
import { ComponentGridWrapper } from "./mainComponents";
import OrderExecution from "./ItemComponents/OrderExecution/OrderExecution";
import RecentTrades from "./ItemComponents/RecentTrades/RecentTrades";
import AccountInfo from "./ItemComponents/AccountInfo/AccountInfo";
import Orderbook from "./ItemComponents/Orderbook/Orderbook";
import TradingViewImage from "./ItemComponents/TradingView/TradingViewImage";

const layout = [
  {
    i: "MarketWatch",
    x: 0,
    y: 0,
    w: 8,
    h: 24,
    minW: 8,
    isResizable: true,
    isDraggable: false
  },
  {
    i: "TradingInfo",
    x: 0,
    y: 21,
    w: 42,
    h: 11,
    isResizable: true,
    isDraggable: false
  },
  {
    i: "OrderExecution",
    x: 50,
    y: 7,
    w: 8,
    h: 27,
    minW: 5,
    isResizable: true,
    isDraggable: false
  },
  {
    i: "RecentTrades",
    x: 50,
    y: 0,
    w: 8,
    h: 8,
    minW: 5,
    isResizable: true,
    isDraggable: false
  },
  {
    i: "AccountInfo",
    x: 8,
    y: 18,
    w: 34,
    h: 3,
    isResizable: true,
    isDraggable: false
  },
  {
    i: "Orderbook",
    x: 34,
    y: 0,
    w: 8,
    h: 21,
    minW: 6,
    isResizable: true,
    isDraggable: false
  },
  {
    i: "TradingView",
    x: 8,
    y: 0,
    w: 26,
    h: 21,
    isResizable: true,
    isDraggable: false
  }
];
const tabsList = {
  MarketWatch: {
    component: <MarketWatch />,
    key: "MarketWatch",
    id: 1
  },
  TradingInfo: {
    component: <TradingInfo />,
    key: "TradingInfo",
    id: 2
  },
  OrderExecution: {
    component: <OrderExecution />,
    key: "OrderExecution",
    id: 3
  },
  RecentTrades: {
    component: <RecentTrades />,
    key: "RecentTrades",
    id: 4
  },
  AccountInfo: {
    component: <AccountInfo />,
    key: "AccountInfo",
    id: 5
  },
  Orderbook: {
    component: <Orderbook />,
    key: "Orderbook",
    id: 6
  },
  TradingView: {
    component: <TradingViewImage />,
    key: "TradingView",
    id: 7
  }
};

const ResponsiveGrid = () => {
  return (
    <GridLayout
      className="layout"
      layout={layout}
      cols={50}
      rowHeight={19}
      width={1920}
      height={1080}
      //breakpoints={{lg: 1366, md: 1024, sm: 768, xs: 320, xxs: 0}}
      //rowHeight={this.props.size.height / 36 - 5}
      //rowHeight={50} /*- (isMobileOnly ? 1.2 : 0)}*/
      verticalCompact={true}
      horizontalCompact={true}
      margin={[5, 5]}
      containerPadding={[2, 2]}
      preventCollision={false}

      //draggableHandle=".draggable"
    >
      {Object.values(tabsList).map(d => {
        return (
          <ComponentGridWrapper key={d.key}>{d.component}</ComponentGridWrapper>
        );
      })}
    </GridLayout>
  );
};

export default ResponsiveGrid;
