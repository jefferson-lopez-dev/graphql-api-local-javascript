import { ApolloServer } from "apollo-server";
import { typeDefs } from "./defs/index.js";
import { resolvers } from "./resolvers/index.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`server listening on ${url}`);
});
