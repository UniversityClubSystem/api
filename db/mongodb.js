const mongoose = require('mongoose');
const path = require('path')
const configMongoDb = require(path.join(__dirname, '..', 'config', 'mongodb.js'));

mongoose.connect(configMongoDb.url, err => {
  if (err) {
    console.error('We are not connectiong mongodb: ' + err);
  } else {
    console.log('Yeah, All good. We connected mongodb: ' + configMongoDb.url);
  }
});
