// Libs
import { TriangleDownIcon } from "@chakra-ui/icons";
import {
  Box,
  BoxProps,
  FormLabel,
  Text,
  forwardRef,
  Select as CharakSelect,
  SelectProps,
} from "@chakra-ui/react";
import React, { memo, useId } from "react";

// Types
import { OptionType } from "types/common";

type Props = {
  label?: React.ReactNode;
  name: string;
  styleWrapper?: BoxProps;
  isDisabled?: boolean;
  options: OptionType[];
  error?: string;
} & SelectProps;

const Select = forwardRef(
  (
    { label, name, styleWrapper, isDisabled, options, error, ...rest }: Props,
    ref
  ) => {
    const id = useId();

    return (
      <Box fontSize="base" color="text.default" {...styleWrapper}>
        <FormLabel
          fontSize="base"
          fontFamily="heading"
          htmlFor={`${name}${id}`}
        >
          {label}
        </FormLabel>
        <CharakSelect
          id={`${name}${id}`}
          icon={<TriangleDownIcon fontSize="12px" />}
          borderColor={error ? "text.reversal" : "text.secondary"}
          fontSize="base"
          cursor="pointer"
          isDisabled={isDisabled}
          ref={ref}
          {...rest}
        >
          {options?.map(({ label, value }, index) => (
            <option value={value} key={index + id}>
              {label}
            </option>
          ))}
        </CharakSelect>
        {error && <Text variant="error">{error}</Text>}
      </Box>
    );
  }
);

export default memo(Select);
