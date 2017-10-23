const mongoose = require('mongoose')

const userSchema = require(__dirname + "/schemas/user.js")
const clubSchema = require(__dirname + "/schemas/club.js")
const blogSchema = require(__dirname + "/schemas/blog.js")
const eventSchema = require(__dirname + "/schemas/event.js")

// the schema is useless so far
// we need to create a model using it
const Club = mongoose.model('Club', clubSchema)
const User = mongoose.model('User', userSchema)
const Blog = mongoose.model('Blog', blogSchema)
const _Event = mongoose.model('Event', eventSchema)

// Event is js keyword
module.exports = {
    'User'  : User,
    'Club'  : Club,
    'Blog'  : Blog,
    '_Event': _Event
}