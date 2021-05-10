import React from "react";
import { storiesOf } from "@storybook/react";
import Checkbox from "../components/Checkbox/Checkbox";

storiesOf("Checkbox", module)
  .add("Checkbox", () => {
    return <Checkbox checked={false} />;
  })

  .add("Checkbox | label", () => {
    return (
      <Checkbox
        checked={true}
        label="Here is a checkbox label which I'm trying to make it a bit longer by writing a random sentence."
      />
    );
  })

  .add("Checkbox disabled", () => {
    return <Checkbox disabled />;
  })

  .add("Checkbox | disabled checked ", () => {
    return <Checkbox checked={true} disabled />;
  });
