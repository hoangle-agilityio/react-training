// Libs
import React from "react";

// Components
import Modal from "components/Modal";
import { Button } from "@chakra-ui/react";

type Props = {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
};

const ConfirmModal = ({ title, isOpen, onClose, onSubmit }: Props) => {
  return (
    <Modal
      title={title}
      isOpen={isOpen}
      onClose={onClose}
      styles={{
        wrapper: {
          alignItems: "center",
        },
        title: {
          marginBottom: "15px",
        },
      }}
    >
      <Button
        width="173px"
        height="51px"
        marginBottom="13px"
        onClick={onSubmit}
      >
        Yes, I'm sure!
      </Button>
      <Button width="173px" height="51px" variant="secondary" onClick={onClose}>
        Cancel
      </Button>
    </Modal>
  );
};

export default ConfirmModal;
