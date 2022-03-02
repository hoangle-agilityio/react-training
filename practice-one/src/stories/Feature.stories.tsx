import Feature from "../components/Feature";
import { ComponentStory } from "@storybook/react";
import "../scss/sections/_features.scss";

export default {
  component: Feature,
  title: "Page & Layout/Feature",
}

const Template: ComponentStory<typeof Feature> = args => <Feature {...args} />

export const Default = Template.bind({});

Default.args = {
  featureItems: [
    {
      id: 1,
      title: "The best products start with Sketch",
      content: "Slate helps you see how many more days you need to work to reach your financial goal.",
    },
    {
      id: 2,
      title: "Fastest way to organize",
      content: "Slate helps you see how many more days you need to work to reach your financial goal.",
    },
    {
      id: 3,
      title: "Work better together",
      content: "Slate helps you see how many more days you need to work to reach your financial goal.",
    },
  ]
}
