const mongoose = require('mongoose');

const NewBook = new mongoose.Schema({
    title: { type: String },
    author: { type: String },
    pages: { type: String },
    publisher: { type: String },
    published_at: { type: String },
});

module.exports = mongoose.model("Book", NewBook);