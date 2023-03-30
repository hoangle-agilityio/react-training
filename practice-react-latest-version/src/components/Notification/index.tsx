// Libs
import { Alert, Box, BoxProps, AlertProps } from "@chakra-ui/react";
import React, { memo } from "react";

type StyleTypes = {
  wrapper?: BoxProps;
  alert?: AlertProps;
};

type Props = {
  type: "error" | "success" | "info";
  message: string;
  styles?: StyleTypes;
};

const Notification = ({ type, message, styles }: Props) => {
  return (
    <Box padding="0 20px" {...styles?.wrapper}>
      <Alert status={type} variant="left-accent" {...styles?.alert}>
        {message}
      </Alert>
    </Box>
  );
};

export default memo(Notification);
