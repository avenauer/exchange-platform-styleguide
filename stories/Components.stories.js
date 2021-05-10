import React from "react";
import { storiesOf } from "@storybook/react";
import OrderExecution from "../components/ItemComponents/OrderExecution/OrderExecution";
import {
  ComponentWrapper,
  TestAbsoluteImage
} from "../components/mainComponents";
import { themes } from "../components/theming";
import RegisterPage from "../components/ItemComponents/UserPage/RegisterPage";
import LoginPage from "../components/ItemComponents/UserPage/LoginPage";
import BackgroundDeepBlue from "../assets/images/purple-1.svg";
import Header from "../components/ItemComponents/Header/Header";
import RecentTrades from "../components/ItemComponents/RecentTrades/RecentTrades";
import MarketWatch from "../components/ItemComponents/MarketWatch/MarketWatch";
import TradingInfo from "../components/ItemComponents/TradingInfo/TradingInfo";
import AccountInfo from "../components/ItemComponents/AccountInfo/AccountInfo";
import ResponsiveGrid from "../components/GridLayout";
import Orderbook from "../components/ItemComponents/Orderbook/Orderbook";
import TradingViewImage from "../components/ItemComponents/TradingView/TradingViewImage";
import Footer from "../components/ItemComponents/Footer/Footer";
import Modal from "../components/Modal/Modal";
import ForgotPasswordFirstStep from "../components/ItemComponents/UserPage/ForgotPasswordFirstStep";
import ForgotPasswordSecondStep from "../components/ItemComponents/UserPage/ForgotPasswordSecondStep";

storiesOf("Components", module)
  .add("Order Execution", () => {
    return (
      <ComponentWrapper
        maxWidth="350px"
        maxHeight="40em"
        backgroundColor={themes.dark.color.gray.shadowdark}
      >
        <OrderExecution />
      </ComponentWrapper>
    );
  })
  .add("Register page", () => {
    return (
      <>
        <TestAbsoluteImage src={BackgroundDeepBlue} />
        <ComponentWrapper maxWidth="450px">
          <RegisterPage />
        </ComponentWrapper>
      </>
    );
  })
  .add("Login Page", () => {
    return (
      <>
        <TestAbsoluteImage src={BackgroundDeepBlue} />
        <ComponentWrapper maxWidth="450px">
          <LoginPage />
        </ComponentWrapper>
      </>
    );
  })
  .add("Header", () => {
    return <Header />;
  })
  .add("Recent Trades", () => {
    return (
      <ComponentWrapper
        maxWidth="350px"
        maxHeight="40em"
        backgroundColor={themes.dark.color.gray.shadowdark}
      >
        <RecentTrades />
      </ComponentWrapper>
    );
  })
  .add("Trading Info", () => {
    return (
      <ComponentWrapper backgroundColor={themes.dark.color.gray.shadowdark}>
        <TradingInfo />
      </ComponentWrapper>
    );
  })
  .add("Trading Info", () => {
    return (
      <ComponentWrapper
        backgroundColor={themes.dark.color.gray.shadowdark}
        maxWidth="80em"
      >
        <AccountInfo />
      </ComponentWrapper>
    );
  })
  .add("Market Watch", () => {
    return (
      <ComponentWrapper
        maxWidth="350px"
        backgroundColor={themes.dark.color.gray.shadowdark}
      >
        <MarketWatch />
      </ComponentWrapper>
    );
  })
  .add("Orderbook", () => {
    return (
      <ComponentWrapper
        maxWidth="350px"
        maxHeight="40em"
        backgroundColor={themes.dark.color.gray.shadowdark}
      >
        <Orderbook />
      </ComponentWrapper>
    );
  })
  .add("TradingView", () => {
    return (
      <div>
        <TradingViewImage />
      </div>
    );
  })
  .add("ForgotPasswordFirstStep", () => {
    return (
        <>
          <TestAbsoluteImage src={BackgroundDeepBlue} />
          <ComponentWrapper maxWidth="450px">
            <ForgotPasswordFirstStep />
          </ComponentWrapper>
        </>
    );
  })
    .add("ForgotPasswordSecondStep", () => {
        return (
            <>
                <TestAbsoluteImage src={BackgroundDeepBlue} />
                <ComponentWrapper maxWidth="450px">
                    <ForgotPasswordSecondStep />
                </ComponentWrapper>
            </>
        );
    })
  .add("Layout Grid", () => {
    return (
      <div>
        <Header />
        <ResponsiveGrid />
        <Footer />
      </div>
    );
  });
