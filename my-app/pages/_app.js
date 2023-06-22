import { ThemeProvider} from 'styled-components';
import {GlobalStyle} from "../core/styles/GlobalStyles";
import {styledTheme} from "../core/styles/styled";
import ErrorBoundary from "../core/components/ErrorBoundary";


export default function MyApp({ Component, pageProps }) {
  return (
      <ThemeProvider theme={styledTheme}>
        <GlobalStyle/>
        <ErrorBoundary>
          <Component {...pageProps} />
        </ErrorBoundary>
      </ThemeProvider>
  );
}
