// Libs
import * as React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

// Components
import Input from "components/Input";
import { SearchIcon } from "@chakra-ui/icons";

export default {
  title: "Components/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const InputBase = Template.bind({});
InputBase.args = {
  ...InputBase.args,
  label: "Name",
  styles: {
    wrapper: {
      width: "300px",
    },
  },
};

export const InputWithPlaceholder = Template.bind({});
InputWithPlaceholder.args = {
  placeholder: "Name",
  styles: {
    wrapper: {
      width: "300px",
    },
  },
};

export const InputWithIcon = Template.bind({});
InputWithIcon.args = {
  placeholder: "Search",
  icon: <SearchIcon />,
  styles: {
    wrapper: {
      width: "300px",
    },
  },
};

export const InputBaseWithError = Template.bind({});
InputBaseWithError.args = {
  ...InputBaseWithError.args,
  label: "Name",
  styles: {
    wrapper: {
      width: "300px",
    },
  },
  error: "This is an error.",
};

export const TextareaBase = Template.bind({});
TextareaBase.args = {
  ...TextareaBase.args,
  label: "Description",
  isTextArea: true,
  styles: {
    wrapper: {
      width: "300px",
    },
  },
};
