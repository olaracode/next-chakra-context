import { extendTheme } from "@chakra-ui/react";

export const darkTheme = extendTheme({
  styles: {
    global: {
      body: {
        color: "#ffffff",
        background: "#0A131F",
      },
    },
  },
  colors: {
    brand: {
      bg: "#0A131F",
      card: "#14243B",
      main: "#457B9D",
      light: "#A8DADC",
      accent: "#E63946",
    },
    text: {
      main: "#ffffff",
      hover: "#000",
    },
  },
});

export const lightTheme = extendTheme({
  styles: {
    global: {
      body: {
        color: "black",
        background: "#ffffff",
      },
    },
  },
  colors: {
    brand: {
      bg: "#ffffff",
      card: "#fafafa",
      main: "#457B9D",
      light: "#A8DADC",
      accent: "#E63946",
    },
    text: {
      main: "#000000",
      hover: "#457B9D",
    },
  },
});
