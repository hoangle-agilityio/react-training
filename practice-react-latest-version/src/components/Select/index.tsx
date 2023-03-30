// Libs
import { TriangleDownIcon } from "@chakra-ui/icons";
import { Box, BoxProps, FormLabel, Text, forwardRef } from "@chakra-ui/react";
import ReactSelect, {
  GroupBase,
  OptionsOrGroups,
  Props as SelectProps,
} from "react-select";
import React, { memo, useId } from "react";

// Types
import { OptionType } from "types/common";

// Themes
import { colors } from "themes/colors";

type ControlStyleTypes = {
  width?: string;
  height?: string;
};

type StyleTypes = {
  wrapper?: BoxProps;
  controlStyles?: ControlStyleTypes;
};

type Props = {
  label?: React.ReactNode;
  name: string;
  className?: string;
  styles?: StyleTypes;
  isSearchable?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  options: OptionsOrGroups<unknown, GroupBase<OptionType>>;
  error?: string;
} & SelectProps<OptionType>;

const SelectCustom = forwardRef(
  (
    {
      label,
      name,
      className,
      styles,
      isSearchable = true,
      isDisabled,
      isLoading,
      options,
      error,
      ...rest
    }: Props,
    ref
  ) => {
    const id = useId();
    const customStyles = (controlStyles?: ControlStyleTypes) => ({
      control: () => ({
        "&:hover": {
          borderColor: error ? colors.text.reversal : colors.text.secondary,
        },
        display: "flex",
        height: controlStyles?.height || "40px",
        border: "1px solid",
        borderColor: error ? colors.text.reversal : colors.text.secondary,
        borderRadius: "6px",
        cursor: "pointer",
      }),
    });

    return (
      <Box fontSize="base" color="text.default" {...styles?.wrapper}>
        <FormLabel
          fontSize="base"
          fontFamily="heading"
          htmlFor={`${name}${id}`}
        >
          {label}
        </FormLabel>
        <ReactSelect
          inputId={`${name}${id}`}
          options={options}
          ref={ref}
          components={{
            DropdownIndicator: () => (
              <TriangleDownIcon boxSize="12px" marginRight="20px" />
            ),
            IndicatorSeparator: () => null,
          }}
          styles={customStyles(styles?.controlStyles)}
          className={className}
          isSearchable={isSearchable}
          isDisabled={isDisabled}
          isLoading={isLoading}
          {...rest}
        />
        {error && <Text variant="error">{error}</Text>}
      </Box>
    );
  }
);

export default memo(SelectCustom);
