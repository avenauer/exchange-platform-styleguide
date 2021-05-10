import React from "react";
import { storiesOf } from "@storybook/react";
import Modal from "../components/Modal/Modal";
import { ComponentWrapper } from "../components/mainComponents";

storiesOf("Modal", module).add("Modal", () => {
  return (
    <ComponentWrapper maxWidth="80em">
        <Modal >
            <h1>Some children h1</h1>
        </Modal>
    </ComponentWrapper>
  );
});
