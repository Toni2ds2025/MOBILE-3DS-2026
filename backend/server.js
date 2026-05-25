const { mongoClient } = require('mongodb');

const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/react-native';

const client = new MongoClient(uri);