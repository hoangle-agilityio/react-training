import SymbolIcon from "../components/SymbolIcon";
import { ComponentStory } from "@storybook/react";

export default {
  component: SymbolIcon,
  title: "Form/Symbol Icon",
}

const Template: ComponentStory<typeof SymbolIcon> = args => <SymbolIcon {...args} />;

export const Default = Template.bind({});

Default.args = {
  width: "42",
  height: "42",
  icon: "twitter",
}
