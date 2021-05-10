import React, { Component } from "react";
import { Switcher, SwitcherItem } from "../../Table/_components";
import { TradingInfoStyled, TradingInfoSwitcherWrapper } from "./_components";
import TradingInfoSort from "./TradingInfoSort";
import TradingInfoContainer from "./TradingInfoContainer";
import TradingInfoPagination from "./TradingInfoPagination";

class TradingInfo extends Component {
  state = {
    currentTab: 1
  };
  changeTabs = e => () => {
    this.setState({
      currentTab: e
    });
  };

  render() {
    return (
      <TradingInfoStyled>
        <TradingInfoSwitcherWrapper>
          <div>
            <Switcher>
              <SwitcherItem
                selected={this.state.currentTab === 1}
                onClick={this.changeTabs(1)}
              >
                <span>
                  Positions <span> [0]</span>
                </span>
              </SwitcherItem>
              <SwitcherItem
                selected={this.state.currentTab === 2}
                onClick={this.changeTabs(2)}
              >
                <span>
                  Open Orders <span> [0]</span>
                </span>
              </SwitcherItem>
              <SwitcherItem
                selected={this.state.currentTab === 5}
                onClick={this.changeTabs(5)}
              >
                <span>
                  Stops <span> [0]</span>
                </span>
              </SwitcherItem>
              <SwitcherItem
                selected={this.state.currentTab === 3}
                onClick={this.changeTabs(3)}
              >
                <span>Order History</span>
              </SwitcherItem>
              <SwitcherItem
                selected={this.state.currentTab === 4}
                onClick={this.changeTabs(4)}
              >
                <span>Trade History</span>
              </SwitcherItem>
            </Switcher>
          </div>
        </TradingInfoSwitcherWrapper>
        <TradingInfoSort />
        <TradingInfoContainer />
        <TradingInfoPagination />
      </TradingInfoStyled>
    );
  }
}
export default TradingInfo;
