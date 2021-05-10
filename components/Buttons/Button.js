import React, { Component } from "react";
import { ButtonStyled } from "./_components";

class Button extends Component {
  render() {
    return (
      <ButtonStyled secondary={this.props.theme} disabled={this.props.disabled}>
        {this.props.children}
      </ButtonStyled>
    );
  }
}

export default Button;
