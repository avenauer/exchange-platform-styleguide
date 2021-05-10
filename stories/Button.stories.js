import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "../components/Buttons/Button";

storiesOf("Buttons", module)
  .add("Primary button", () => {
    return <Button>Primary</Button>;
  })
  .add("Secondary button", () => {
    return <Button theme="secondary">Secondary</Button>;
  })
  .add("Disabled button", () => {
    return (
      <>
        <Button disabled>Disabled</Button>
        <Button theme="secondary" disabled>
          Secondary Disabled
        </Button>
      </>
    );
  });
