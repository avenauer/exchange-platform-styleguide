import React from "react";
import { storiesOf } from "@storybook/react";
import Pagination from "../components/Pagination/Pagination";

storiesOf("Pagination", module).add("Pagination", () => (
  <Pagination>
    <a href="">1</a>
    <a href="">2</a>
    <a href="">3</a>
  </Pagination>
));
