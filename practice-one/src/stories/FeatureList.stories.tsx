import FeatureList from "../components/FeatureList";
import { ComponentStory } from "@storybook/react";
import "../scss/sections/_features.scss";

export default {
  component: FeatureList,
  title: "Page & Layout/Feature/Feature List",
}

const Template: ComponentStory<typeof FeatureList> = args => <FeatureList {...args} />

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
