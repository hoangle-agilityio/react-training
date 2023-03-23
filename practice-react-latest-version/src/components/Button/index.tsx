// Libs
import * as React from "react";
import { memo } from "react";
import { Button as ReactButton, ButtonProps } from "@chakra-ui/react";

type Props = {
  label: React.ReactNode;
  disabled?: boolean;
  type?: "primary" | "secondary" | "text";
  styles?: ButtonProps;
  leftIcon?: React.ReactElement<React.ReactNode>;
  rightIcon?: React.ReactElement<React.ReactNode>;
  onClick?: () => void;
};

const Button = ({
  label,
  disabled = false,
  type = "primary",
  styles,
  leftIcon,
  rightIcon,
  onClick,
}: Props) => {
  let props = null;
  switch (type) {
    case "primary":
      props = {
        bgColor: "blue.300",
        color: "white.100",
      };
      break;
    case "secondary":
      props = {
        bgColor: "transparent",
        color: "red.200",
      };
      break;
    default:
      props = {
        bgColor: "transparent",
      };
  }

  return (
    <ReactButton
      fontSize="base"
      fontFamily="medium"
      fontWeight="500"
      _hover={{
        opacity: "70%",
        bgColor: `${type === "secondary" ? "gray.200" : "transparent"}`,
      }}
      isDisabled={disabled}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      onClick={onClick}
      {...props}
      {...styles}
    >
      {label}
    </ReactButton>
  );
};

export default memo(Button);
