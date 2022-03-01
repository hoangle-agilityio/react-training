import TopNav from "../components/TopNav";
import { ComponentStory } from '@storybook/react';
import "../scss/sections/_nav.scss";

export default {
  component: TopNav,
  title: "Page & Layout/Top Navigation",
}

const Template: ComponentStory<typeof TopNav> = args => <TopNav {...args} />;

export const Default = Template.bind({});

Default.args = {
  logo: {
    srcImg: "http://localhost:3000/src/assets/images/figma-logo.svg",
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
