import React, { Component } from "react";
import { DropdownStyled } from "./_components";

class Dropdown extends Component {
  state = {
    title: "",
    direction: true
  };

  handleIsVisible = value => () => {
    this.setState({ direction: value });
  };

  render() {
    return (
      <DropdownStyled
        side={this.props.side}
        direction={this.state.direction}
        onMouseLeave={this.handleIsVisible(false)}
        onMouseEnter={this.handleIsVisible(true)}
      >
        <label>{this.props.title}</label>
        <div className="dropdown-content">{this.props.children}</div>
      </DropdownStyled>
    );
  }
}

export default Dropdown;
