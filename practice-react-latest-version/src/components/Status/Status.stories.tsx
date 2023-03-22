// Libs
import * as React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

// Components
import Status from "components/Status";

export default {
  title: "Components/Status",
  component: Status,
} as ComponentMeta<typeof Status>;

const Template: ComponentStory<typeof Status> = (args) => <Status {...args} />;

export const StatusBase = Template.bind({});
StatusBase.args = {
  ...StatusBase.args,
  label: "Status",
  type: "Others",
  styles: {
    bgColor: "blue.200",
    color: "white.100",
  },
};

export const StatusOpen = Template.bind({});
StatusOpen.args = {
  ...StatusOpen.args,
  type: "Open",
};

export const StatusPaid = Template.bind({});
StatusPaid.args = {
  ...StatusPaid.args,
  type: "Paid",
};

export const StatusDue = Template.bind({});
StatusDue.args = {
  ...StatusDue.args,
  type: "Due",
};

export const StatusInactive = Template.bind({});
StatusInactive.args = {
  ...StatusInactive.args,
  type: "Inactive",
};
