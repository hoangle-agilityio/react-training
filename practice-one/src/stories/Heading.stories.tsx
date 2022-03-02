import Heading from "../components/Heading";
import { ComponentStory } from '@storybook/react';
import "../scss/base/_index.scss";

export default {
  component: Heading,
  title: "Form/Heading",
}

const Template: ComponentStory<typeof Heading> = args => <Heading {...args} />;

export const Default = Template.bind({});

Default.args = {
  headingText: "Heading text",
}

export const WithDescription = Template.bind({});

WithDescription.args = {
  ...Default.args,
  descriptionText: "Description text",
}

export const WithSubHeading = Template.bind({});

WithSubHeading.args = {
  ...Default.args,
  subHeadingText: "Sub Heading text",
}

export const All = Template.bind({});

All.args = {
  ...WithDescription.args,
  subHeadingText: "Sub Heading text",
}
