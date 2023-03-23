// Libs
import * as React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Image } from "@chakra-ui/react";

// Components
import Dropdown from "components/Dropdown";
import Button from "components/Button";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => {
  const renderMenu = () => <Button label="Open Dropdown" />;

  return (
    <Dropdown
      {...args}
      renderMenu={renderMenu}
      stylesOption={{ width: "120px" }}
    >
      <Button
        label="View"
        type="text"
        styles={{
          _hover: {
            bgColor: "gray.200",
          },
          width: "full",
          justifyContent: "space-between",
          borderRadius: "0",
          color: "blue.300",
        }}
        rightIcon={<Image src="/icons/info.svg" />}
      />
      <Button
        label="Edit"
        type="text"
        styles={{
          _hover: {
            bgColor: "gray.200",
          },
          width: "full",
          justifyContent: "space-between",
          borderRadius: "0",
          color: "blue.300",
        }}
        rightIcon={<Image src="/icons/pencil-filed.svg" />}
      />
      <Button
        label="Delete"
        type="text"
        styles={{
          _hover: {
            bgColor: "gray.200",
          },
          width: "full",
          justifyContent: "space-between",
          borderRadius: "0",
          color: "red.200",
        }}
        rightIcon={<Image src="/icons/trash-filled.svg" />}
      />
    </Dropdown>
  );
};

export const Default = Template.bind({});
Default.args = {
  ...Default.args,
};
