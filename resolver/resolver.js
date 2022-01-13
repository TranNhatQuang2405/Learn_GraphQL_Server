import { books, authors } from "../data/rest.js";
const resolvers = {
    //QUERY

    Query: {
        books: books,
        book: (parent, args) =>
            books().find((book) => book.id.toString() === args.id),
        authors: authors,
        author: (parent, args) =>
            authors().find((author) => author.id.toString() === args.id),
    },
    Book: {
        author: (parent, args) => {
            return authors().find(
                (author) => author.id.toString() === parent.authorID.toString()
            );
        },
    },
    Author: {
        books: (parent, args) => {
            return books().filter(
                (book) => book.authorID.toString() === parent.id.toString()
            );
        },
    },

    //MUTATION
    Mutation: {
        createAuthor: (parent, args) => args,
        createBook: (parent, args) => args,
    },
};
export default resolvers;
