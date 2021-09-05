const express = require("express");
///const cors = require("cors");
const db = require('./db');
const BookModel = require('./modles/Newbook');
const BookRouter = require('./routers/routes/Newbook');
const app = express();

app.use(express.json())
    //app.use(cors());
    //app.use('/', BookRouter);



const port = 5000;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});