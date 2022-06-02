import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from '../components/organisms/navbar/navbar'
import { lightTheme, darkTheme } from 'theme/theme'

function MyApp({ Component, pageProps }) {
  return (
  <ChakraProvider overflowX={"hidden"} theme={lightTheme}>
    <Component {...pageProps} />
  </ChakraProvider>
)}

export default MyApp
