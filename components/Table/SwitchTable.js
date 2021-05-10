import React, { Component } from "react";
import {
  Cell,
  Heading,
  HeadingCell,
  Row,
  Switcher,
  SwitcherItem,
  TableBody,
  TableStyled
} from "./_components";
import { LightSpan } from "../mainComponents";

class SwitchTable extends Component {
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
      <>
        <Switcher>
          <SwitcherItem
            selected={this.state.currentTab === 1}
            onClick={this.changeTabs(1)}
          >
            <LightSpan>Spot</LightSpan>
          </SwitcherItem>
          <SwitcherItem
            selected={this.state.currentTab === 2}
            onClick={this.changeTabs(2)}
          >
            <LightSpan>Futures</LightSpan>
          </SwitcherItem>
          <SwitcherItem
            selected={this.state.currentTab === 3}
            onClick={this.changeTabs(3)}
          >
            <LightSpan>Futures?</LightSpan>
          </SwitcherItem>
          <SwitcherItem
            selected={this.state.currentTab === 4}
            onClick={this.changeTabs(4)}
          >
            <LightSpan>Futures?</LightSpan>
          </SwitcherItem>
          <SwitcherItem
            selected={this.state.currentTab === 5}
            onClick={this.changeTabs(5)}
          >
            <LightSpan>Futures?</LightSpan>
          </SwitcherItem>
          {/*{this.props.routerMarketState !== 'SPOT' && (
					<DisplayOn selected={this.props.orderType === 3} onClick={this.changeTabs(3)}>
						{t('text.Stop')}
					</DisplayOn>
				)}*/}
        </Switcher>
        <TableStyled>
          <TableBody>
            <Heading>
              <HeadingCell>
                <h5>TestHead</h5>
              </HeadingCell>
              <HeadingCell>
                <h5>TestHead2</h5>
              </HeadingCell>
              <HeadingCell>
                <h5>TestHead3</h5>
              </HeadingCell>
            </Heading>
            <Row>
              <Cell>
                <p>Test</p>
              </Cell>
              <Cell>
                <p>Test</p>
              </Cell>
              <Cell>
                <p>Test</p>
              </Cell>
            </Row>
          </TableBody>
        </TableStyled>
      </>
    );
  }
}

export default SwitchTable;
