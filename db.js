const mongoose = require('mongoose');
const mongooseURI = 'mongodb+srv://admin:superansh123456@cluster0.tzdhl.mongodb.net/cNotebookDB';

const connectToMongo = () => {
    mongoose.connect(mongooseURI, () => {
        console.log('Connected To Mongo Successfully!!!');
    });
};

module.exports = connectToMongo;
