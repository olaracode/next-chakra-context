import React from "react";
import { useStoreState } from "easy-peasy";
import { darkTheme, lightTheme } from "./theme";
import { ChakraProvider } from "@chakra-ui/react";
const ThemeProvider = ({ children }) => {
  const theme = useStoreState((state) => state.theme.palette);
  let currentTheme = theme ? lightTheme : darkTheme;
  return (
    <ChakraProvider overflowX={"hidden"} theme={theme ? lightTheme : darkTheme}>
      {children}
    </ChakraProvider>
  );
};

export default ThemeProvider;
