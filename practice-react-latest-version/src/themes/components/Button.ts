export const Button = {
  baseStyle: {
    fontFamily: "medium",
    fontWeight: "500",
    _hover: {
      opacity: "70%",
    },
  },
  variants: {
    primary: {
      bgColor: "background.primary",
      color: "brand.100",
      fontSize: "base",
    },
    secondary: {
      bgColor: "transparent",
      color: "text.reversal",
      fontSize: "base",
      _hover: {
        bgColor: "background.default",
      },
    },
  },
  defaultProps: {
    variant: "primary",
  },
};
