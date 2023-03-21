// Libs
import * as React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

// Components
import Button from "components/Button";

export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  ...Primary.args,
  label: "+ Add customer",
  type: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Cancel",
  type: "secondary",
};

export const Text = Template.bind({});
Text.args = {
  label: "Edit",
  type: "text",
  styles: {
    color: "blue.200",
  },
};
