const Newbook = require('../../modles/Newbook');

const InsertNewBook = (res, req) => {
    const { title, author, pages, publisher, published_at } = req.body;

    const crete = new NewBook({
        title,
        author,
        pages,
        publisher,
        published_at
    });

    crete
        .save().then((result) => {
            res.json("Susesss add  new book");
        }).catch((err) => {
            res.json("noo added");
        })
}



// Get all book
const getAllBook = (res, req) => {
    Newbook.find({}).exec().then((result) => {

        res.json(result);
        res.status(200);
    }).catch((err => {
        res.json(err);
        res.status(500);
    }))
}

///GetById 


const GetById = (res, req) => {
    const id = req.params.id;
    Newbook.findById({ _id: id }).exec().then((res) => {
        res.josn(res);
        res.status(200);
    }).catch((err) => {
        res.json(err);
        res.status(500);

    })
}


const deleteByid = (res, req) => {}


module.exports = { InsertNewBook, getAllBook, GetById };