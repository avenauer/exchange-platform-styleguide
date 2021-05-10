import React, { Component } from "react";
import { LightSpan, ModalPadding } from "../../mainComponents";
import Input from "../../Inputs/Input";
import Checkbox from "../../Checkbox/Checkbox";
import {
  ModalLinksFooter,
  ModalPageStyled,
  ModalTitle,
  WideButton
} from "./_components";
import LinkTo from "@storybook/addon-links/dist/react";

class LoginPage extends Component {
  render() {
    const Agree = (
      <>
        I agree to BBOD’s <a href="">Terms of Use</a>
      </>
    );

    return (
      <ModalPageStyled>
        <ModalPadding>
          <ModalTitle>Sign in</ModalTitle>
          <h2>
            <span className="coloured-span">Welcome</span>, Avenauer
          </h2>
          <Input message="" title="Username" />
          <Input title="Password" />
          <WideButton>Login</WideButton>
        </ModalPadding>
        <ModalLinksFooter>
          <LightSpan>Don't have account?</LightSpan>
          <LightSpan>
            <LinkTo story="register-page">Register</LinkTo>
          </LightSpan>
        </ModalLinksFooter>
      </ModalPageStyled>
    );
  }
}

export default LoginPage;
