// Libs
import * as React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

// Components
import Notification from "components/Notification";

export default {
  title: "Components/Notification",
  component: Notification,
} as ComponentMeta<typeof Notification>;

const Template: ComponentStory<typeof Notification> = (args) => (
  <Notification {...args} />
);

export const NotificationError = Template.bind({});
NotificationError.args = {
  ...NotificationError.args,
  type: "error",
  message: "This is an error.",
};

export const NotificationSuccess = Template.bind({});
NotificationSuccess.args = {
  ...NotificationSuccess.args,
  type: "success",
  message: "This is a success message.",
};

export const NotificationInfo = Template.bind({});
NotificationInfo.args = {
  ...NotificationInfo.args,
  type: "info",
  message: "This is a info message.",
};
