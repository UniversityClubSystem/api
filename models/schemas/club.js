const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = require(__dirname + "/user.js")
const blogSchema = require(__dirname + "/blog.js")
const eventSchema = require(__dirname + "/event.js")

// create a schema
const clubSchema = new Schema({
  clupfullname: String,
  about:    String,
  pic:      String,
  clupname: { type: String, required: true, unique: true },
  emails:   [ String ],
  members:  [ userSchema ],
  admins:   [ userSchema ],
  blogs:    [ blogSchema ],
  events:   [ eventSchema ],
  created_at: { type: Date, default: Date.now }
})

// make this available to our users in our Node applications
module.exports = clubSchema