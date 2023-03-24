// Libs
import { Alert, Box, BoxProps, AlertProps } from "@chakra-ui/react";
import React, { memo, useEffect, useState } from "react";

type StyleTypes = {
  wrapper?: BoxProps;
  alert?: AlertProps;
};

type Props = {
  type: "error" | "success" | "info";
  message: string;
  delay?: number;
  styles?: StyleTypes;
  clearError?: () => void;
};

const Notification = ({
  type,
  message,
  delay = 5000,
  styles,
  clearError,
}: Props) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
      if (clearError) {
        clearError();
      }
    }, delay);
  }, [delay, clearError]);

  return visible ? (
    <Box padding="0 20px" {...styles?.wrapper}>
      <Alert status={type} variant="left-accent" {...styles?.alert}>
        {message}
      </Alert>
    </Box>
  ) : null;
};

export default memo(Notification);
