import React from 'react';
import {linkTo} from '@storybook/addon-links';
import {Welcome} from '@storybook/react/demo';
import {storiesOf} from "@storybook/react";
import Button from "@storybook/react/dist/demo/Button";
import Palette from "../components/Palette/Palette";

export default {
    title: 'Welcome',
};

export const toStorybook = () => <Welcome showApp={linkTo('Button')} />;

toStorybook.story = {
    name: 'to Storybook',
};

storiesOf('Palette',module)
    .add("Palette",()=>{
    return <div><h1>Palette:</h1><Palette/></div>
});