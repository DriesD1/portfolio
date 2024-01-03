import { settings } from "../config";
import { ApolloClient, ApolloProvider, ApolloLink, HttpLink, InMemoryCache } from "@apollo/client";

// create a HTTP link to the graphql server
const httpLink = new HttpLink({
  uri: settings.HYGRAPH_CONTENT_API_URL,
});

// create a apollo link for the access token
const apolloLink = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      Authorization: `Bearer ${settings.HYGRAPH_ACCESS_TOKEN}`,
    },
  }));
  return forward(operation);
});

// create appolo client
const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: apolloLink.concat(apolloLink, httpLink),
});

// create provider
const HygraphProvidor = ({ children }) => {
    return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default HygraphProvidor;