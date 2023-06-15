import { ThemeProvider} from 'styled-components';
import {GlobalStyle} from "../core/styles/GlobalStyles";
import {styledTheme} from "../core/styles/styled";


export default function MyApp({ Component, pageProps }) {
  return (
      <ThemeProvider theme={styledTheme}>
        <GlobalStyle/>
        <Component {...pageProps} />
      </ThemeProvider>
  );
}
