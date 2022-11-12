const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient;
require("dotenv").config();
const dburl = process.env.MONGO_URI;
const dbname=process.env.MONGO_NAME;
module.exports={mongodb,MongoClient,dburl,dbname}