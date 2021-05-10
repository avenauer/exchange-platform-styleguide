import { addDecorator, addParameters, configure } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";
import { DEFAULT_VIEWPORT, INITIAL_VIEWPORTS } from "./viewports";

// automatically import all files ending in *.stories.js

addDecorator(withA11y);
addDecorator(withKnobs);
addParameters({
  backgrounds: [
    { name: "Dark", value: "#171F2B", default: true },
    { name: "Light", value: "#F0F2F4" },
    { name: "Modal", value: "#1E2838" }
  ]
});
addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: DEFAULT_VIEWPORT
  }
});

configure(require.context("../stories", true, /\.stories\.js$/), module);
