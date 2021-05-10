import React, { Component } from "react";
import { MarketWatchStyled } from "./_components";
import { Switcher, SwitcherItem } from "../../Table/_components";
import MarketWatchContainer from "./MarketWatchContainer";
import MarketWatchSort from "./MarketWatchSort";
import PairListInfoGroup from "./PairListInfoGroup/PairListInfoGroup";
import MarketWatchSearchBar from "./MarketWatchSearchBar";

class MarketWatch extends Component {
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
      <MarketWatchStyled>
        <PairListInfoGroup />
        <Switcher>
          <SwitcherItem
            selected={this.state.currentTab === 1}
            onClick={this.changeTabs(1)}
          >
            <span>Zero Fee</span>
          </SwitcherItem>
          <SwitcherItem
            selected={this.state.currentTab === 2}
            onClick={this.changeTabs(2)}
          >
            <span>Leverage Trading</span>
          </SwitcherItem>
          <SwitcherItem
            selected={this.state.currentTab === 3}
            onClick={this.changeTabs(3)}
          >
            <span>Spot Market</span>
          </SwitcherItem>
        </Switcher>
        <MarketWatchSearchBar/>
        <MarketWatchSort />
        <MarketWatchContainer />
      </MarketWatchStyled>
    );
  }
}

export default MarketWatch;
