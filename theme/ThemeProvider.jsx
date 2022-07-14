import { useContext } from "react";
import { darkTheme, lightTheme } from "./theme";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { AppContext } from "context";
const ThemeProvider = ({ children }) => {
  const { isDarkTheme } = useContext(AppContext);
  return (
    <ChakraProvider
      overflowX={"hidden"}
      bg="brand.bg"
      theme={isDarkTheme ? darkTheme : lightTheme}
    >
      <Box>{children}</Box>
    </ChakraProvider>
  );
};

export default ThemeProvider;
