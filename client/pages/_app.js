import "../styles/globals.css";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import {ApolloClient, InMemoryCache, ApolloProvider, } from '@apollo/client';

const client = new ApolloClient({
  uri:"/graphql",
  cache: new InMemoryCache()
})


function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider >
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
    </ApolloProvider>
    
  );
}

export default MyApp;
