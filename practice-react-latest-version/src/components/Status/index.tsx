// Libs
import { Badge, BadgeProps } from "@chakra-ui/react";
import * as React from "react";
import { memo } from "react";

// Types
import { StatusType } from "types/common";

type Props = {
  type: StatusType;
  label?: string;
  styles?: BadgeProps;
};

const Status = ({ type, label, styles }: Props) => {
  let labelStatus = "";
  let statusStyles: BadgeProps = {};

  switch (type) {
    case "Open":
      labelStatus = "Open";
      statusStyles = {
        bgColor: "blue.100",
        color: "blue.200",
      };
      break;
    case "Paid":
      labelStatus = "Paid";
      statusStyles = {
        bgColor: "green.100",
        color: "green.200",
      };
      break;
    case "Due":
      labelStatus = "Due";
      statusStyles = {
        bgColor: "red.100",
        color: "red.200",
      };
      break;
    case "Inactive":
      labelStatus = "Inactive";
      statusStyles = {
        bgColor: "gray.200",
        color: "gray.500",
      };
      break;
    default:
      labelStatus = label ?? "";
      break;
  }

  return (
    <Badge
      {...styles}
      {...statusStyles}
      borderRadius="10px"
      padding="1px 10px"
      fontFamily="medium"
      fontSize="sm"
      fontWeight="500"
      textTransform="capitalize"
    >
      {labelStatus}
    </Badge>
  );
};

export default memo(Status);
