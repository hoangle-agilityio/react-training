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

type Props = {
  label?: string;
  name?: string;
  icon?: JSX.Element;
  iconPosition?: "left" | "right";
  styles?: StyleType;
  isTextArea?: boolean;
  error?: string;
} & InputProps &
  TextareaProps;

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
            paddingRight: "12px",
            flexDirection: "row-reverse",
          };
          break;
        default:
          iconStyle = {
            paddingLeft: "12px",
            flexDirection: "row",
          };
          break;
      }
    }

    return (
      <>
        <Box {...styles?.wrapper} color="text.default">
          {label && (
            <FormLabel
              fontSize="base"
              fontFamily="heading"
              htmlFor={`${name}${id}`}
            >
              {label}
            </FormLabel>
          )}
          <Flex
            alignItems="center"
            border="1px"
            borderRadius="6"
            borderColor={error ? "text.reversal" : "text.secondary"}
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
          {error && <Text variant="error">{error}</Text>}
        </Box>
      </>
    );
  }
);

export default memo(Input);
