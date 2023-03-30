export const Badge = {
  baseStyle: {
    borderRadius: "10px",
    padding: "1px 10px",
    fontFamily: "medium",
    fontSize: "sm",
    fontWeight: "500",
    textTransform: "capitalize",
  },
  variants: {
    open: {
      bgColor: "background.info",
      color: "icon.info",
    },
    paid: {
      bgColor: "background.success",
      color: "icon.success",
    },
    due: {
      bgColor: "background.error",
      color: "icon.error",
    },
    inactive: {
      bgColor: "background.default",
      color: "icon.default",
    },
  },
};
