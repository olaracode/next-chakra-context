import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { lightTheme, darkTheme } from "theme/theme";
import { StoreProvider, useStoreState } from "easy-peasy";
import store from "@/store/index";
import Navbar from "@/organisms/navbar/";
import ThemeProvider from "theme/ThemeProvider";
function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider store={store}>
      <ThemeProvider>
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </StoreProvider>
  );
}

export default MyApp;
