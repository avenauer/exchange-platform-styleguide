import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "../components/Buttons/Button";
import UserAccount from "../containers/Account/UserAccount";

storiesOf("Account sections", module)
  .add("Account", () => {
    return <UserAccount/>;
  });
