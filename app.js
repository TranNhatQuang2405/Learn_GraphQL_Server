import express from "express";
import mongoose from "mongoose";
import { ApolloServer } from "apollo-server-express";
//load schema & resolver
import typeDefs from "./schema/schema.js";
import resolvers from "./resolver/resolver.js";

//Load db methods
import mongoDataMethods from "./data/db.js";

//Connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://kokoro:kokoro@graphql.mr1iq.mongodb.net/GraphQL?retryWrites=true&w=majority",
            {
                autoIndex: true,
                autoCreate: true,
            }
        );
        console.log("Mongoose Connect!");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

const Server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({ mongoDataMethods }),
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

connectDB();
