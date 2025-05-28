const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

const dbConfig = {
    useMongoDB: true, // Set to true to use MongoDB, false to use JSON file
    mongoURI: process.env.MONGO_URI || 'mongodb://localhost:27017/bookstore',
    jsonFilePath: path.join(__dirname, '../../data/books.json')
};

const connectDB = async () => {
    if (dbConfig.useMongoDB) {
        try {
            await mongoose.connect(dbConfig.mongoURI, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
            console.log('MongoDB connected');
        } catch (error) {
            console.error('MongoDB connection error:', error);
            process.exit(1);
        }
    } else {
        if (!fs.existsSync(dbConfig.jsonFilePath)) {
            fs.writeFileSync(dbConfig.jsonFilePath, JSON.stringify([]));
        }
        console.log('Using JSON file for data storage');
    }
};

module.exports = { connectDB, dbConfig };