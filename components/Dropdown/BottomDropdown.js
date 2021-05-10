import React, { Component } from "react";
import { BottomDropdownStyled } from "./_components";

class BottomDropdown extends Component {
  state = {
    title: "",
    direction: true
  };

  handleIsVisible = value => () => {
    this.setState({ direction: value });
  };

  render() {
    return (
      <BottomDropdownStyled
        direction={this.state.direction}
        onMouseLeave={this.handleIsVisible(false)}
        onMouseEnter={this.handleIsVisible(true)}
      >
        <label>{this.props.title}</label>
        <div className="bottom-dropdown-content">{this.props.children}</div>
      </BottomDropdownStyled>
    );
  }
  f;
}

export default BottomDropdown;
