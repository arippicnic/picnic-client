import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createUploadLink } from "apollo-upload-client";
import { ApolloLink } from "apollo-link";
import { onError } from "apollo-link-error";

const isProd = process.env === "production";

const cache = new InMemoryCache({
  addTypename: false
}).restore(window.__APOLLO_STATE__);

const linkHttp = createUploadLink({
  uri: process.env.GRAPH_URL,
  credentials: "include",
  ssrMode: true,
  ssrForceFetchDelay: 100
});

const errorLink = onError(
  ({ graphQLErrors, networkError, operation, forward, response, error }) => {
    if (graphQLErrors) {
      {
        !isProd &&
          graphQLErrors.forEach(err => console.log(err.extensions.code));
      }
      if (
        graphQLErrors.find(err => err.extensions.code === "UNAUTHENTICATED")
      ) {
      }
      graphQLErrors.map(({ message, path, extensions, locations }) =>
        !isProd ? console.log(`Error: Message: ${message}`) : false
      );
    }
    if (networkError) {
      !isProd ? console.log(networkError) : null;
    }
  }
);

const links = [linkHttp];
const link = ApolloLink.from(links);

export default new ApolloClient({
  cache,
  link
});
