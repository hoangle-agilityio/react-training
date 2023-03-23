// Libs
import React, { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Text } from "@chakra-ui/react";

// Components
import Modal from "components/Modal";
import Button from "components/Button";

export default {
  title: "Components/Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
  const [isShowModal, setShowModal] = useState(false);

  return (
    <>
      <Button
        label="Open Modal"
        type="primary"
        onClick={() => setShowModal(true)}
        styles={{ width: "100px" }}
      />
      <Modal
        {...args}
        title="Modal Component"
        isOpen={isShowModal}
        onClose={() => setShowModal(false)}
      >
        <Text fontSize="base" margin="20px 0">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Text>
        <Button
          label="Close"
          onClick={() => setShowModal(false)}
          styles={{ width: "250px" }}
        />
      </Modal>
    </>
  );
};

export const ModalSizeXS = Template.bind({});
ModalSizeXS.args = {
  ...ModalSizeXS.args,
  size: "xs",
};

export const ModalSizeSM = Template.bind({});
ModalSizeSM.args = {
  ...ModalSizeSM.args,
  size: "sm",
};

export const ModalSizeMD = Template.bind({});
ModalSizeMD.args = {
  ...ModalSizeMD.args,
  size: "md",
};

export const ModalSizeLG = Template.bind({});
ModalSizeLG.args = {
  ...ModalSizeLG.args,
  size: "lg",
};

export const ModalSizeXL = Template.bind({});
ModalSizeXL.args = {
  ...ModalSizeXL.args,
  size: "xl",
};

export const ModalSizeFull = Template.bind({});
ModalSizeFull.args = {
  ...ModalSizeFull.args,
  size: "full",
};
