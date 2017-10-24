const mongoose = require('mongoose');
const path = require('path');

mongoose.Promise = require('bluebird'); // https://stackoverflow.com/questions/38138445/node3341-deprecationwarning-mongoose-mpromise#38153706
const config = require(path.join(__dirname, '..', 'config.js'));
const MongoDbUrl = process.env.MONGODB_URI || config.mongodb.url || 'mongodb://localhost/api';

mongoose.connect(MongoDbUrl, {
  useMongoClient: true // https://stackoverflow.com/questions/44749700/how-to-set-usemongoclient-mongoose-4-11-0#44750995
}, err => {
  if (err) {
    console.error('We are not connectiong mongodb: ' + err);
  } else {
    console.log('Yeah, All good. We connected mongodb: ' + MongoDbUrl);
  }
});
