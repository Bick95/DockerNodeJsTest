// connection.js
const mongoose = require("mongoose");

const connection = "mongodb:27017";

const connectDB = () => {
    return mongoose.connect(connection);
};

module.exports = connectDB;