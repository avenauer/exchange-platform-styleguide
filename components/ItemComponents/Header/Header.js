import React, { Component } from "react";
import { HeaderStyled, HeaderWrapperStyled, LogoStyled } from "./_components";

import Logo from "../../../assets/logo/bbod-white.svg";
import ConnectionPing from "./ConnectionPing";
import { GraySpan, LighterSpan } from "../../mainComponents";
import Button from "../../Buttons/Button";
import LanguageDropdown from "./LanguageDropdown/LanguageDropdown";
import CustomizeLayoutDropdown from "./CustomizeLayoutDropdown/CustomizeLayoutDropdown";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SuccessMessage from "../../Notifications/SuccessMessage";
import LinkTo from "@storybook/addon-links/react";


class Header extends Component {
  state = {
    logged: true
  };
  notify = () => {
    toast.success(
      <SuccessMessage message="New order! Quantity: 0.1 price: 220.99" />,
      { autoClose: 111000 }
    );
    toast.success(
      <SuccessMessage message="Your order has been filled! Quantity: 0.1 price: 220.99" />,
      { autoClose: 111000 }
    );
  };
  render() {
    return (
      <HeaderStyled>
        <HeaderWrapperStyled>
          <LogoStyled src={Logo} alt="" />
          <ConnectionPing />
          <LighterSpan>10:25:23 (UTC)</LighterSpan>
        </HeaderWrapperStyled>
        <HeaderWrapperStyled>
          <div>
            {/*<button onClick={this.notify}>Toasts tests</button>*/}
            <ToastContainer />
          </div>
          <CustomizeLayoutDropdown />
          {!this.props.logged ? (
            <div>
              <LinkTo story="login-page">
                <Button theme="primary">Login</Button>
              </LinkTo>
              <LinkTo story="register-page">
                <Button>Register</Button>
              </LinkTo>
            </div>
          ) : (
            <div>
              <GraySpan>Welcome,</GraySpan>
              <LighterSpan>Avenauer</LighterSpan>
            </div>
          )}
          <LanguageDropdown />
        </HeaderWrapperStyled>
      </HeaderStyled>
    );
  }
}

export default Header;
