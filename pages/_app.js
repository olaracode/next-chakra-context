import Navbar from "@/organisms/navbar/";
import ThemeProvider from "theme/ThemeProvider";
import "../styles/globals.css";
import { AppProvider } from "context/ContextProvider";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Head>
        <title>Techie Blog</title>
        <meta name="description" content="Tech blog" />
        <meta
          name="keywords"
          content="Programming, technology, code, web development"
        />
      </Head>
      <ThemeProvider>
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </AppProvider>
  );
}

export default MyApp;
