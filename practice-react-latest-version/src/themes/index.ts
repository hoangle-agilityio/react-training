import { extendTheme } from "@chakra-ui/react";
import { colors } from "./colors";
import { fonts, fontSizes } from "./typography";
import { sizes } from "./metrics";

const themes = extendTheme({
  colors,
  fonts,
  fontSizes,
  sizes,
});

export default themes;
