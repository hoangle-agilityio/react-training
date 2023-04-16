import { extendTheme } from "@chakra-ui/react";
import { colors } from "./colors";
import { fonts, fontSizes } from "./typography";
import { sizes } from "./metrics";
import { styles } from "./styles";
import * as components from "./components";

const themes = extendTheme({
  colors,
  fonts,
  fontSizes,
  sizes,
  styles,
  components: { ...components },
});

export default themes;
