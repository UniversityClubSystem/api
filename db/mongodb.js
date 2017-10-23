const mongoose      = require('mongoose')
const configMongoDb = require(__dirname + '/../config/mongodb.js')

mongoose.connect(configMongoDb.url, (err) => {
  if (err) {
      console.error('We are not connectiong mongodb: ' + err)
  } else {
      console.log('Yeah, All good. We connected mongodb: ' + configMongoDb.url)
  }
})
