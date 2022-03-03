import Footer from "./Footer";
import { ComponentStory } from "@storybook/react";
import "../../scss/base/_index.scss";

export default {
  component: Footer,
  title: "Page & Layout/Footer",
}

const Template: ComponentStory<typeof Footer> = args => <Footer {...args} />

export const Default = Template.bind({});

Default.args = {
  pageList: [
    { id: 1, name: "Eleanor Edwards", link: "#!" },
    { id: 2, name: "Ted Robertson", link: "#!" },
    { id: 3, name: "Annette Russell", link: "#!" },
    { id: 4, name: "Jennie Mckinney", link: "#!" },
    { id: 5, name: "Gloria Richards", link: "#!" },
  ]
}
