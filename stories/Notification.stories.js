import React from "react";
import { storiesOf } from "@storybook/react";
import InfoMessage from "../components/Notifications/InfoMessage";
import ErrorMessage from "../components/Notifications/ErrorMessage";
import WarningMessage from "../components/Notifications/WarningMessage";
import SuccessMessage from "../components/Notifications/SuccessMessage";

storiesOf("Notifications", module)
  .add("Notification Information", () => {
    return <InfoMessage message="Place your information message here!" />;
  })
  .add("Notification Success", () => {
    return <SuccessMessage message="Place your success message here!" />;
  })
  .add("Notification Warning", () => {
    return <WarningMessage message="Place your warning message here!" />;
  })
  .add("Notification Error", () => {
    return <ErrorMessage message="Place your error message here!" />;
  });
