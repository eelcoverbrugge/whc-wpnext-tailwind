import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://academic-horse.flywheelstaging.com/graphql",
  cache: new InMemoryCache(),
});

export default client;
