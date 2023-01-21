import { extendTheme, type ThemeComponents } from "@chakra-ui/react";

export const breakpoints = {
  xs: "0px",
  sm: "320px",
  movil: "375px",
  lsm: "414px",
  tablet: "520px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "1.5xl": "1400px",
  "2xl": "1600px",
  "3xl": "1900px",
};

const components: ThemeComponents = {
  Button: {
    variants: {
      solid: {
        bg: "primary",
        color: "white",
        _hover: {
          bg: "primary",
          opacity: "0.8",
        },
        _active: {
          bg: "primary",
          opacity: "0.8",
        },
      },
      secondary: {
        bg: "dark.500",
        color: "white",
        border: "1px solid",
        borderColor: "whiteT.100",
        _hover: {
          bg: "dark.500",
          opacity: "0.8",
        },
        _active: {
          bg: "dark.500",
          opacity: "0.8",
        },
      },
      outline: {
        bg: "primary",
        bgClip: "text",
        borderColor: "#74c0f4",
        _hover: {
          bg: "primary",
          color: "light.lighter",
        },
        _active: {
          bg: "primary",
          color: "light.lighter",
        },
      },
    },
    baseStyle: {
      fontWeight: "500",
      fontSize: "lsm",
      borderRadius: "md",
      px: "30px",
      height: "auto",
    },
  },
  Heading: {
    baseStyle: {
      fontWeight: 500,
      fontFamily: "inherit",
    },
    sizes: {
      xl: {
        fontSize: "2xl",
      },
    },
  },
};

const borderRadius = {
  radii: {
    none: "0",
    sm: "0.125rem",
    base: "8px",
    md: "10px",
    lg: "15px",
    xl: "20px",
    "2xl": "30px",
    "3xl": "40px",
    full: "9999px",
  },
};

const fontSizes = {
  xs: "10px",
  sm: "12px",
  lsm: "14px",
  md: "16px",
  lg: "18px",
  xl: "22px",
  "2xl": "24px",
  "3xl": "36px",
  "4xl": "40px",
  "5xl": "42px",
  "6xl": "50px",
  "7xl": "64px",
  "8xl": "80px",
  "9xl": "100px",
};

const customTheme = extendTheme({
  components,

  styles: {
    global: () => ({
      body: {
        minHeight: "100vh",
        overflowX: "hidden",
        bg: "gradientBlue",
        bgSize: "700px",
        color: "grayText",
        fontSize: "md",
        fontFamily: "Rexton",
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
        zIndex: "9999 !important"
      },
      "&.dapp-core-component__dappModalStyles__dappModalHeader": {
        paddingTop: "15px !important"
      },
      "&.dapp-core-component__dappModalStyles__dappModalCloseButton": {
        top: "5px !important",
        right: "10px !important"
      }
    }),
  },

  colors: {
    white: "#FFFFFF",
    black: "#000000",
    primary: "#D8B919",
    secondary: "#0D6FF0",
    success: "#A5F8D0",
    green2: " #83CF48",
    grayText: "#818284",
    gradientBlue:
      "linear-gradient(180deg, #080B2C 0%, #080916 100%)",
    dark: {
      100: "#41424B",
      200: "#373842",
      300: "#34383C",
      400: "#2C2D37",
      500: "#21222D",
      600: "#1E2124",
      700: "#1B1C25",
      800: "#1A1A1A",
    },
    light: {
      100: "#F9F9F9",
    },
    whiteT: {
      50: "rgba(255, 255, 255, 0.05)",
      100: "rgba(255, 255, 255, 0.1)",
      200: "rgba(255, 255, 255, 0.2)",
      300: "rgba(255, 255, 255, 0.3)",
      400: "rgba(255, 255, 255, 0.4)",
      500: "rgba(255, 255, 255, 0.5)",
      600: "rgba(255, 255, 255, 0.6)",
      700: "rgba(255, 255, 255, 0.7)",
      800: "rgba(255, 255, 255, 0.8)",
      900: "rgba(255, 255, 255, 0.9)",
    },
    blackT: {
      50: "rgba(0, 0, 0, 0.05)",
      100: "rgba(0, 0, 0, 0.1)",
      200: "rgba(0, 0, 0, 0.2)",
      300: "rgba(0, 0, 0, 0.3)",
      400: "rgba(0, 0, 0, 0.4)",
      500: "rgba(0, 0, 0, 0.5)",
      600: "rgba(0, 0, 0, 0.6)",
      700: "rgba(0, 0, 0, 0.7)",
      800: "rgba(0, 0, 0, 0.8)",
      900: "rgba(0, 0, 0, 0.9)",
    },
  },

  breakpoints,
  ...borderRadius,
  fontSizes,
});

export default customTheme;
