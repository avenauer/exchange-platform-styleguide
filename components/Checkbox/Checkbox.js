import React, { Component } from "react";
import { CheckboxComponentStyled, CheckboxStyled } from "./_components";
import CheckIcon from "./../../assets/icons/check-outline.svg";
import { LightSpan } from "../mainComponents";

class Checkbox extends Component {
  state = {
    checked: false
  };

  static defaultProps = {
    disabled: false,
    label: ""
  };

  //Checked changed from state to props to show disabled action in storybook

  onChange = () => {
    if (!this.props.disabled) this.setState({ checked: !this.state.checked });
  };
  render() {
    return (
      <CheckboxComponentStyled checked={this.props.checked}>
        <CheckboxStyled
          className={this.props.disabled ? "disabled" : "active"}
          onClick={this.onChange}
          checked={this.props.checked}
        >
          <img src={CheckIcon} alt="" />
        </CheckboxStyled>
        <LightSpan>{this.props.label}</LightSpan>
        <input
          disabled={this.props.disabled}
          type="checkbox"
          checked={this.state.checked}
        />
      </CheckboxComponentStyled>
    );
  }
}

export default Checkbox;
