import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4pot13o20ls01xxhloyg4tn/master",
  cache: new InMemoryCache() 
})