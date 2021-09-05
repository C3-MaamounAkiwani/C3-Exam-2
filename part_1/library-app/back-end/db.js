// db
const mongoose = require('mongoose');
const option = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

mongoose.connect('mongodb://127.0.0.1/my_database', option).then(
    () => {
        console.log('DB is connected');
    })