import Button from "../components/Button";
import { ComponentStory } from '@storybook/react';
import "../scss/base/_button.scss";

export default {
  component: Button,
  title: "Form/Button",
}

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Light = Template.bind({});

Light.args = {
  typeButton: "button",
  buttonColor: "light",
  label: "Button",
  size: "sm",
}

export const Info = Template.bind({});

Info.args = {
  ...Light.args,
  buttonColor: "info",
}

export const Danger = Template.bind({});

Danger.args = {
  ...Light.args,
  buttonColor: "danger",
}
