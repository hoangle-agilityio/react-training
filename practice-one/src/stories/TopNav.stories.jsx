import React from "react";
import TopNav from "../jsx/components/TopNav";
import "../scss/sections/nav.scss";

export default {
  component: TopNav,
  title: "Page & Layout/Top Navigation",
}

const Template = args => <TopNav {...args} />;

export const Default = Template.bind();

Default.args = {
  logo: { srcImg: "http://localhost:3000/src/assets/images/figma-logo.svg", altImg: "Figma Land", link: "#!" },
  menuItems: [
    { id: 1, name: "Home", link: "#!" },
    { id: 2, name: "Product", link: "#!" },
    { id: 3, name: "Pricing", link: "#!" },
    { id: 4, name: "About", link: "#!" },
    { id: 5, name: "Contact", link: "#!" },
  ]
}
