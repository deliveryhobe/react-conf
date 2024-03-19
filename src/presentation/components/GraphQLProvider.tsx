"use client";
import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ENV } from "@/ENV";

const GraphQLProvider = ({ children }: { children: React.ReactNode }) => {
  const client = new ApolloClient({
    uri: ENV.baseUrl,
    cache: new InMemoryCache(),
  });
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default GraphQLProvider;
