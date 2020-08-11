const;const mongoose = require("../db/mongoose");
const {mongoose} = require("../db/mongoose");
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    publisher: {
        type: String,
        required: true,
    },
    year: {
        type: String,
        required: true,
    },
    commnet: {
        count: {type: Number, default: 0},
        votes: {type: Number, default: 0},
        rating: {type: Number, default: 0},
    },
});
let Book = mongoose.model('Book', bookSchema);
module.exports = {Book};