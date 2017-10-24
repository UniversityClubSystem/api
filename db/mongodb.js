const mongoose = require('mongoose');
const path = require('path')
const config = require(path.join(__dirname, '..', 'config.js'));
const MongoDbUrl = process.env.MONGODB_URI || config.mongodb.url || 'mongodb://localhost/api';

mongoose.connect(MongoDbUrl, err => {
  if (err) {
    console.error('We are not connectiong mongodb: ' + err);
  } else {
    console.log('Yeah, All good. We connected mongodb: ' + MongoDbUrl);
  }
});
