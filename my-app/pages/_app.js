import {Hydrate, QueryClient, QueryClientProvider} from '@tanstack/react-query';
import { ThemeProvider} from 'styled-components';
import {GlobalStyle} from "../core/styles/GlobalStyles";
import {styledTheme} from "../core/styles/styled";


function MyApp({ Component, pageProps }) {
  const [queryClient] = React.useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={styledTheme}>
        <GlobalStyle/>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
