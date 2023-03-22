// Libs
import * as React from "react";
import { memo } from "react";
import { Button as ReactButton, ButtonProps } from "@chakra-ui/react";

interface Props {
  label: React.ReactNode;
  disabled?: boolean;
  type?: "primary" | "secondary" | "text";
  styles?: ButtonProps;
  onClick?: () => void;
}

const Button = ({
  label,
  disabled = false,
  type = "primary",
  styles,
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
      {...props}
      {...styles}
      fontSize="base"
      fontFamily="medium"
      fontWeight="500"
      _hover={{
        opacity: "70%",
        bgColor: `${type === "secondary" ? "gray.200" : null}`,
      }}
      isDisabled={disabled}
      onClick={onClick}
    >
      {label}
    </ReactButton>
  );
};

export default memo(Button);
