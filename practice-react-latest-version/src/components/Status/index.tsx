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
        bgColor: "background.info",
        color: "icon.info",
      };
      break;
    case "Paid":
      labelStatus = "Paid";
      statusStyles = {
        bgColor: "background.success",
        color: "icon.success",
      };
      break;
    case "Due":
      labelStatus = "Due";
      statusStyles = {
        bgColor: "background.error",
        color: "icon.error",
      };
      break;
    case "Inactive":
      labelStatus = "Inactive";
      statusStyles = {
        bgColor: "background.default",
        color: "icon.default",
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
