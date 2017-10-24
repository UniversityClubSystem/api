const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const clubSchema = new Schema({
  clupfullname: String,
  about: String,
  pic: String,
  clupname: { type: String, required: true, unique: true },
  emails: [String],
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  admins: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  blogs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Blog' }],
  events: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Event' }],
  created_at: { type: Date, default: Date.now }
});

// make this available to our users in our Node applications
module.exports = mongoose.model('Club', clubSchema);
