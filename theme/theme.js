import { extendTheme } from "@chakra-ui/react";

export const darkTheme = extendTheme({
  colors: {
    brand: {
      bg: "#0A131F",
      card: "#14243B",
      main: "#457B9D",
      light: "#A8DADC",
      accent: "#E63946",
    },
  },
});

export const lightTheme = extendTheme({
  colors: {
    brand: {
      bg: "#ffffff",
      card: "#fafafa",
      main: "#457B9D",
      light: "#A8DADC",
      accent: "#E63946",
    },
  },
});
