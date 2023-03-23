// Libs
import * as React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

// Components
import Select from "components/Select";

export default {
  title: "Components/Select",
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const SelectBase = Template.bind({});
SelectBase.args = {
  ...SelectBase.args,
  label: "Status",
  name: "status",
  styles: {
    wrapper: {
      width: "300px",
    },
  },
};

export const SelectWithPlaceholder = Template.bind({});
SelectWithPlaceholder.args = {
  ...SelectWithPlaceholder.args,
  placeholder: "Status",
  styles: {
    wrapper: {
      width: "300px",
    },
  },
};

export const SelectBaseWithError = Template.bind({});
SelectBaseWithError.args = {
  ...SelectBaseWithError.args,
  label: "Status",
  styles: {
    wrapper: {
      width: "300px",
    },
  },
  error: "This is an error.",
};
