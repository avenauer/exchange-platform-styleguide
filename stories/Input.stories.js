import React from "react";
import { storiesOf } from "@storybook/react";
import Input from "../components/Inputs/Input";
import InputButtons from "../components/Inputs/InputButtons";

storiesOf("Inputs", module)
  .add("Input | title, message", () => {
    return (
      <Input
        title="Title"
        placeholder="Placeholder..."
        message="Here is a message!"
      />
    );
  })
  .add("Input | message", () => {
    return <Input placeholder="Placeholder..." message="Here is a message!" />;
  })
  .add("Input | title", () => {
    return <Input title="Title" placeholder="Placeholder..." />;
  })
  .add("Input", () => {
    return <Input placeholder="Placeholder..." />;
  })
  .add("Input disabled", () => {
    return <Input placeholder="Placeholder..." disabled />;
  })
  .add("Input password", () => {
    return <Input type="password" placeholder="Placeholder..." />;
  })
  .add("Input buttons", () => {
    return <InputButtons type="password" placeholder="0.00" />;
  });
