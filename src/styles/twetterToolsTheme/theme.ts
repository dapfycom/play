import { extendTheme } from "@chakra-ui/react";
import { borderRadius } from "./borderRadius";
import { breakpoints } from "./breakpoints";
import { colors } from "./colors";
import { components } from "./components";
import { fontSizes } from "./fontSizes";

export const freeBirdTheme = extendTheme({
  styles: {
    global: () => ({
      body: {
        minHeight: "100vh",
        overflowX: "hidden",
        bg: "white",
        bgSize: "700px",
        color: "#1A202C",
        fontSize: "sm",
        fontFamily: "Rexton",
      },
      "*": {
        "&::-webkit-scrollbar": {
          width: 1.5,
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "white",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "dark.500",
          borderRadius: 1.5,
        },
        "*::placeholder": {
          color: "#747A84",
        },
        scrollbarWidth: "auto",
        scrollbarColor: "dark.500 white",
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
  config: {
    initialColorMode: "light",
    seSystemColorMode: false,
  },
  components,
  colors,
  breakpoints,
  ...borderRadius,
  fontSizes,
});
