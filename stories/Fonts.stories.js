import React from 'react';
import {storiesOf} from "@storybook/react";
import Fonts from "../components/Fonts/Fonts";
import FontExamples from "../components/Fonts/FontExamples";

storiesOf('Fonts', module)
	.add("Font weights", () => (
		 <Fonts/>
));
storiesOf('Fonts', module)
	.add("Font examples", () => (
		<FontExamples/>
	));