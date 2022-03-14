import { ThemeProvider } from '@mui/material'
import LightTheme from '../components/UI/Theme/lighttheme'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  
  return(
    <ThemeProvider theme={LightTheme}>
   <Component {...pageProps} />
  </ThemeProvider>
  )
}

export default MyApp
