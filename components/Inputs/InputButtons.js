import React, { Component } from "react";
import { InputButton, InputStyled, MessageStyled } from "./_components";
import Icon from "../../assets/icons/exclamation-circle.svg";

class InputButtons extends Component {
  render() {
    return (
      <InputStyled>
        <label>{this.props.title}</label>
        <div>
          <input
            className="with-buttons"
            placeholder={this.props.placeholder}
            type={this.props.type}
            disabled={this.props.disabled}
            value={this.props.value}
          />
          <InputButton>+</InputButton>
          <InputButton>-</InputButton>
        </div>
        {this.props.message ? (
          <MessageStyled>
            <img src={Icon} alt="" />
            <span>{this.props.message}</span>
          </MessageStyled>
        ) : null}
      </InputStyled>
    );
  }
}

export default InputButtons;
