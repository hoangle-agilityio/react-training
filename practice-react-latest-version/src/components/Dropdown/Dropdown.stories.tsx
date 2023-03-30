// Libs
import * as React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button, Image } from "@chakra-ui/react";

// Components
import Dropdown from "components/Dropdown";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => {
  const renderMenu = () => <Button>Open Dropdown</Button>;

  return (
    <Dropdown
      {...args}
      renderMenu={renderMenu}
      stylesOption={{ width: "120px" }}
    >
      <Button
        variant="secondary"
        color="icon.primary"
        width="full"
        justifyContent="space-between"
        borderRadius="0"
        rightIcon={
          <Image
            src="/icons/info.svg"
            width="16px"
            height="16px"
            alt="icon info"
          />
        }
      >
        View
      </Button>
      <Button
        variant="secondary"
        color="icon.primary"
        width="full"
        justifyContent="space-between"
        borderRadius="0"
        rightIcon={
          <Image
            src="/icons/pencil-filed.svg"
            width="16px"
            height="16px"
            alt="icon edit"
          />
        }
      >
        Edit
      </Button>
      <Button
        variant="secondary"
        width="full"
        justifyContent="space-between"
        borderRadius="0"
        rightIcon={
          <Image
            src="/icons/trash-filled.svg"
            width="16px"
            height="16px"
            alt="icon delete"
          />
        }
      >
        Delete
      </Button>
    </Dropdown>
  );
};

export const Default = Template.bind({});
Default.args = {
  ...Default.args,
};
