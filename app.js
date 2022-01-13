import express from "express";
import { ApolloServer } from "apollo-server-express";
//load schema & resolver
import typeDefs from "./schema/schema.js";
import resolvers from "./resolver/resolver.js";
const Server = new ApolloServer({
    typeDefs,
    resolvers,
});
const app = express();
const start = async () => {
    await Server.start();
    Server.applyMiddleware({ app });
};
start();

app.listen({ port: 4000 }, () => {
    console.log(`Server ready at http://localhost:4000${Server.graphqlPath}`);
});
