const mongoose = require('mongoose')
const Schema = mongoose.Schema

// create a schema
const userSchema = new Schema({
  fullname: String,
  about:    String,
  pic:      String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  emails:   [ String ],
  created_at: { type: Date, default: Date.now }
})


// make this available to our users in our Node applications
module.exports = userSchema