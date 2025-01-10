const mongoose = require('mongoose');
require("dotenv").config();

const mongoURI = process.env.MONGO_URI;

const connectToMongo = async () => {
 mongoose.connect(mongoURI, await console.log("Connected to mongo Successful")
    );
}

module.exports = connectToMongo;