const express = require('express');

const {
    InsertNewBook,
    getAllBook,
    GetById,
} = require('../controle/NewBook');

const bookRouter = express.Router();

bookRouter.post("/book", InsertNewBook);
bookRouter.get("/books/:book_id", getAllBook);

module.exports = bookRouter;