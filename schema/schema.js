import { gql } from "apollo-server-express";

const typeDefs = gql`
    type Book {
        id: ID
        name: String
        genre: String
        author: Author
    }
    type Author {
        id: ID!
        name: String
        age: Int
        books: [Book]
    }
    #root type
    type Query {
        books: [Book]
        book(id: ID!): Book
        authors: [Author]
        author(id: ID!): Author
    }

    type Mutation {
        createAuthor(id: ID!, name: String, age: Int): Author
        createBook(id: ID!, name: String, genre: String, authorID: ID!): Book
    }
`;

export default typeDefs;
