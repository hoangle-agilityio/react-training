import { extendTheme } from "@chakra-ui/react";
import { colors } from "./colors";
import { fonts, fontSizes } from "./typography";
import { sizes } from "./metrics";
import { styles } from "./styles";

const themes = extendTheme({
  colors,
  fonts,
  fontSizes,
  sizes,
  styles,
});

export default themes;
