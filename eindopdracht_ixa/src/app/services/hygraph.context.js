// Import external modules
import { ApolloClient, ApolloLink, ApolloProvider, HttpLink, InMemoryCache, from } from "@apollo/client";

// Import custom modules
import { settings } from "../config";

// Create a HTTP Link to the GraphQL resource
const httpLink = new HttpLink({
  uri: settings.HYGRAPH_CONTENT_API_URL,
});

// Create an Apollo Link that adds the access token to the GraphQL requests
const apolloLink = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: `Bearer ${settings.HYGRAPH_ACCESS_TOKEN}`,
    }
  }));
  return forward(operation);
});

// Create Apollo client and initialize it with the GraphQL endpoint
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([apolloLink, httpLink]),
});

// Create a custom HygraphProvider
const HygraphProvider = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default HygraphProvider;