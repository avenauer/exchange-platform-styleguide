import React, { Component } from "react";
import {
  ModalLinksFooter,
  ModalPageStyled,
  ModalTitle,
  WideButton
} from "./_components";
import Input from "../../Inputs/Input";
import { LightSpan, ModalPadding } from "../../mainComponents";
import Checkbox from "../../Checkbox/Checkbox";
import LinkTo from "@storybook/addon-links/dist/react";

class RegisterPage extends Component {
  render() {
    const Agree = (
      <>
        I agree to BBOD’s{" "}
        <a href="https://bbod.io/termsOfUse" target="_blank">
          Terms of Use
        </a>
      </>
    );

    return (
      <ModalPageStyled>
        <ModalPadding>
          <ModalTitle>Sign up</ModalTitle>
          <h2>
            <span className="coloured-span">Welcome</span>
          </h2>
          <Input message="" title="Username" />
          <Input
            message="Warning message"
            title="Email Address"
          />
          <Input message="" title="Password" />
          <Input message="" title="Affiliate Code" />
          <Checkbox checked label={Agree} />
          <WideButton>Register</WideButton>
          <ModalLinksFooter>
            <LightSpan>
              <a href="#">Resend email</a>
            </LightSpan>
            <LightSpan>You have account already?</LightSpan>
            <LightSpan>
              <LinkTo story="login-page">Login</LinkTo>
            </LightSpan>
          </ModalLinksFooter>
        </ModalPadding>
      </ModalPageStyled>
    );
  }
}

export default RegisterPage;
