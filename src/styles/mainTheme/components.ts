import { ThemeComponents } from "@chakra-ui/react";

export const components: ThemeComponents = {
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
        borderColor: "primary",
        _hover: {
          bg: "primary",
          color: "white",
        },
        _active: {
          bg: "primary",
          color: "white",
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
