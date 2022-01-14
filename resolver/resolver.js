const resolvers = {
    //QUERY

    Query: {
        books: async (parent, args, { mongoDataMethods }) =>
            await mongoDataMethods.getAllBooks(),
        book: async (parent, args, { mongoDataMethods }) =>
            await mongoDataMethods.getBookById(args.id),
        authors: async (parent, args, { mongoDataMethods }) =>
            await mongoDataMethods.getAllAuthors(),
        author: async (parent, args, { mongoDataMethods }) =>
            await mongoDataMethods.getAuthorById(args.id),
    },
    Book: {
        author: async (parent, args, { mongoDataMethods }) =>
            await mongoDataMethods.getAuthorById(parent.authorID),
    },
    Author: {
        books: async (parent, args, { mongoDataMethods }) =>
            mongoDataMethods.getAllBooks({ authorID: parent.id }),
    },

    //MUTATION
    Mutation: {
        createAuthor: async (parent, args, { mongoDataMethods }) =>
            await mongoDataMethods.createAuthor(args),
        createBook: async (parent, args, { mongoDataMethods }) =>
            await mongoDataMethods.createBook(args),
    },
};
export default resolvers;
