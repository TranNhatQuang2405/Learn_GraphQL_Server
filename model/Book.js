import mongoose from "mongoose";
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    name: {
        type: String,
    },
    age: {
        type: Number,
    },
    authorID: {
        type: String,
    },
    genre: {
        type: String,
    },
});

export default mongoose.model("books", BookSchema);
