// Libs
import {
  Modal as ReactModal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalContentProps,
  ModalHeaderProps,
} from "@chakra-ui/react";
import React, { memo } from "react";

type StyleTypes = {
  wrapper?: ModalContentProps;
  title?: ModalHeaderProps;
};

type Props = {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "full";
  styles?: StyleTypes;
  onClose: () => void;
};

const Modal = ({
  title,
  children,
  isOpen,
  size = "md",
  styles,
  onClose,
}: Props) => {
  return (
    <ReactModal isOpen={isOpen} onClose={onClose} size={size}>
      <ModalOverlay>
        <ModalContent {...styles?.wrapper} padding="20px 35px">
          <ModalCloseButton />
          <ModalHeader {...styles?.title} padding="0">
            {title}
          </ModalHeader>
          {children}
        </ModalContent>
      </ModalOverlay>
    </ReactModal>
  );
};

export default memo(Modal);
