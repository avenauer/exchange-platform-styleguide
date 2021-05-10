import React, { Component } from "react";
import {
  BuyOrderExecutionButton,
  OrderExecutionStyled,
  SellOrderExecutionButton
} from "./_components";
import { Switcher, SwitcherItem } from "../../Table/_components";
import Input from "../../Inputs/Input";
import { InsetPadding, LightSpan } from "../../mainComponents";
import InputButtons from "../../Inputs/InputButtons";


class OrderExecution extends Component {
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
      <OrderExecutionStyled>
        <Switcher>
          <SwitcherItem
            selected={this.state.currentTab === 1}
            onClick={this.changeTabs(1)}
          >
            <span>Limit</span>
          </SwitcherItem>
          <SwitcherItem
            selected={this.state.currentTab === 2}
            onClick={this.changeTabs(2)}
          >
            <span>Market</span>
          </SwitcherItem>
          <SwitcherItem
            selected={this.state.currentTab === 3}
            onClick={this.changeTabs(3)}
          >
            <span>Stop</span>
          </SwitcherItem>
        </Switcher>
        <InsetPadding>
          <InputButtons type="number" title="Price" />
          <InputButtons type="number" title="Quantity" />
          <div className="Margin">
            <LightSpan>
              Margin: <span>0.05 TUSD</span>
            </LightSpan>
          </div>
          <Input value="0.15 TUSD" title="Total" />
        </InsetPadding>
          <BuyOrderExecutionButton>Buy ETH</BuyOrderExecutionButton>
          <SellOrderExecutionButton>Sell ETH</SellOrderExecutionButton>
      </OrderExecutionStyled>
    );
  }
}

export default OrderExecution;
