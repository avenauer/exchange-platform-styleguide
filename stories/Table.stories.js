import React from "react";
import { storiesOf } from "@storybook/react";
import Table from "../components/Table/Table";
import SwitchTable from "../components/Table/SwitchTable";
import { ComponentWrapper } from "../components/mainComponents";
import { themes } from "../components/theming";

storiesOf("Table", module)
  .add("Table", () => (
    <ComponentWrapper
      backgroundColor={themes.dark.color.gray.shadowdark}
      maxWidth="1200px"
    >
      <Table />
    </ComponentWrapper>
  ))
  .add("Switch table", () => (
    <ComponentWrapper
      backgroundColor={themes.dark.color.gray.shadowdark}
      maxWidth="800px"
    >
      <SwitchTable />
    </ComponentWrapper>
  ));
