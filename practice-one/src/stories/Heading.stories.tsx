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

export const HeadingWithDescription = Template.bind({});

HeadingWithDescription.args = {
  ...Default.args,
  descriptionText: "Description text",
}
