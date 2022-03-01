import Image from "../components/Image";
import { ComponentStory } from "@storybook/react";

export default {
  component: Image,
  title: "Form/Image",
}

const Template: ComponentStory<typeof Image> = args => <Image {...args} />
export const Default = Template.bind({});

Default.args = {
  srcImg: "http://localhost:3000/src/assets/images/browser-screen.png",
  altImg: "browser screen",
}
