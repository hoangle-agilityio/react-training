import TopNav from "./TopNav";
import { ComponentStory } from '@storybook/react';
import "../../scss/base/_index.scss";

export default {
  component: TopNav,
  title: "Page & Layout/Top Navigation",
}

const Template: ComponentStory<typeof TopNav> = args => <TopNav {...args} />;

export const Default = Template.bind({});

Default.args = {
  logo: {
    srcImg: "/src/assets/images/figma-logo.svg",
    altImg: "Figma Land",
    link: "#!"
  },
  menuItems: [
    { id: 1, name: "Home", link: "#!" },
    { id: 2, name: "Product", link: "#!" },
    { id: 3, name: "Pricing", link: "#!" },
    { id: 4, name: "About", link: "#!" },
    { id: 5, name: "Contact", link: "#!" },
  ]
}
