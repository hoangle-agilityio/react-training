// Libs
import {
  Box,
  Flex,
  FormLabel,
  forwardRef,
  Input as ReactInput,
  BoxProps,
  FlexProps,
  InputProps,
  Textarea,
  TextareaProps,
  Text,
} from "@chakra-ui/react";
import * as React from "react";
import { memo, useId } from "react";

type StyleType = {
  wrapper?: BoxProps;
  inputWrap?: FlexProps;
  input?: InputProps & TextareaProps;
};

interface Props {
  label?: string;
  name: string;
  icon?: JSX.Element;
  iconPosition?: "left" | "right";
  styles?: StyleType;
  isTextArea?: boolean;
  error?: string;
}

const Input = forwardRef(
  (
    {
      label,
      name,
      icon,
      iconPosition,
      styles,
      isTextArea,
      error,
      ...rest
    }: Props,
    ref
  ) => {
    const id = useId();

    let iconStyle: FlexProps = {};
    // if exist icon, set style
    if (icon) {
      switch (iconPosition) {
        case "right":
          iconStyle = {
            paddingRight: "10px",
            flexDirection: "row-reverse",
          };
          break;
        default:
          iconStyle = {
            paddingLeft: "10px",
            flexDirection: "row",
          };
          break;
      }
    }

    return (
      <>
        <Box {...styles?.wrapper}>
          <FormLabel
            fontSize="base"
            fontFamily="heading"
            htmlFor={`${name}${id}`}
          >
            {label}
          </FormLabel>
          <Flex
            alignItems="center"
            border="1px"
            borderRadius="6"
            borderColor={error ? "red.200" : "gray.400"}
            {...iconStyle}
            {...styles?.inputWrap}
          >
            {icon}
            {isTextArea ? (
              <Textarea
                ref={ref}
                border="none"
                focusBorderColor="transparent"
                fontFamily="body"
                fontSize="base"
                id={`${name}${id}`}
                {...styles?.input}
                {...rest}
              />
            ) : (
              <ReactInput
                ref={ref}
                border="none"
                focusBorderColor="transparent"
                fontFamily="body"
                fontSize="base"
                id={`${name}${id}`}
                {...styles?.input}
                {...rest}
              />
            )}
          </Flex>
          {error && (
            <Text fontSize="base" color="red.200">
              {error}
            </Text>
          )}
        </Box>
      </>
    );
  }
);

export default memo(Input);
