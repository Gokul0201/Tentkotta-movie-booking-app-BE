const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient;
require("dotenv").config();
const dburl = process.env.MONGO_URI;

module.exports={mongodb,MongoClient,dburl}