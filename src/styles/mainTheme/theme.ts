import { extendTheme } from "@chakra-ui/react";
import { borderRadius } from "./borderRadius";
import { breakpoints } from "./breakpoints";
import { colors } from "./colors";
import { components } from "./components";
import { fontSizes } from "./fontSizes";

export const mainTheme = extendTheme({
  components,
  config: {
    initialColorMode: "light",
    seSystemColorMode: false,
  },
  styles: {
    global: () => ({
      body: {
        minHeight: "100vh",
        overflowX: "hidden",
        bg: "gradientBlue",
        bgSize: "700px",
        color: "grayText",
        fontSize: "md",
        fontFamily: "Inter Variable",
      },
      "*": {
        "&::-webkit-scrollbar": {
          width: 1.5,
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "dark.500",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "white",
          borderRadius: 1.5,
        },
        "*::placeholder": {
          color: "#747A84",
        },
        scrollbarWidth: "auto",
        scrollbarColor: "light.baseLight dark.baseDark",
      },
      "&.dapp-core-component__dappModalStyles__dappModal": {
        zIndex: "9999 !important",
      },
      "&.dapp-core-component__dappModalStyles__dappModalHeader": {
        paddingTop: "15px !important",
      },
      "&.dapp-core-component__dappModalStyles__dappModalCloseButton": {
        top: "5px !important",
        right: "10px !important",
      },
    }),
  },

  colors,
  breakpoints,
  ...borderRadius,
  fontSizes,
});
