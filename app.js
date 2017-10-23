// https://stackoverflow.com/questions/42645548/using-import-in-nodejs-server
const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3000
const mongodb = require(__dirname + "/db/mongodb.js")
const AllModels = require(__dirname + '/models/allModels.js')

// Mongodb and Models test
let test = () => {
  console.log("Self execution!");
  let newuser = new AllModels.User({
    fullname: "ResAt Akcan",
    about:    "i was a child",
    pic:      "/pics/4312353.jpg",
    username: "resobyte",
    password: "123456",
    emails:   [ "resobyte@gmail.com" ]
  })
  newuser.save((err) => {
    if (err) {
        console.error(err)
    } else {
        console.log('Yeah, we created new user!')
    }
  })
}
test()

/**
 * Middlewares
 */
app.use(logger('dev'))
app.use(bodyParser.json())

/**
 * GET  /                       # Api running
 */
app.get('/', (req, res) => {
  res.send('Api running!')
})

/**
 * GET    /api/clubs            # Get all clubs' infos with filters
 * POST   /api/clubs            # Create new club
 */
app.route('/api/clubs')
  .get((req, res) => {
    res.send('Get all clubs')
  })
  .post((req, res) => {
    res.send('Create new club')
  })

/**
 * GET    /api/club/:clubname   # Get a club's all infos
 * PUT    /api/club/:clubname   # Update a club's all infos, maybe it is not necessary, because we seperate all updatable info.
 * DELETE /api/club/:clubname   # Delete club
 */
app.route('/api/club/:clubname')
  .get((req, res) => {
    console.log(req.params)
    console.log(req.params.clubname)
    res.send("Get a club's all infos")
  })
  .put((req, res) => {
    res.send("Update a club's all infos")
  })
  .delete((req, res) => {
    res.send('Delete club')
  })

/**
 * GET    /api/club/:clubname/members     # Get a club's members
 * POST   /api/club/:clubname/members     # Add new member a club
 * DELETE /api/club/:clubname/members     # Delete a member of club
 */
app.route('/api/club/:clubname/members')
  .get((req, res) => {
    res.send('Get all members of club')
  })
  .post((req, res) => {
    res.send('Add new member to club')
  })
  .delete((req, res) => {
    res.send('Delete a member of club')
  })

/**
 * GET    /api/club/:clubname/admins     # Get a club's admins
 * POST   /api/club/:clubname/admins     # Add new admin a club
 * DELETE /api/club/:clubname/admins     # Delete a admin of club
 */
app.route('/api/club/:clubname/admins')
  .get((req, res) => {
    res.send('Get all admins of club')
  })
  .post((req, res) => {
    res.send('Add new admin to club')
  })
  .delete((req, res) => {
    res.send('Delete a admin of club')
  })

/**
 * GET    /api/club/:clubname/blogs     # Get a club's blogs, but not all. we must use index method. Because in future we have 1000 blogs, we dont want to get all blogs.
 * POST   /api/club/:clubname/blogs     # Add new blog a club
 * DELETE /api/club/:clubname/blogs     # Delete a blog of club , Maybe it is not necessary, because we delete like this /api/club/:clubname/blog/:blogid
 */
app.route('/api/club/:clubname/blogs')
  .get((req, res) => {
    res.send('Get all blogs of club')
  })
  .post((req, res) => {
    res.send('Add new blog to club')
  })
  .delete((req, res) => {
    res.send('Delete a blog of club')
  })

/**
 * GET    /api/club/:clubname/events     # Get a club's events, but not all. we must use index method. Because in future we have 1000 events, we dont want to get all events.
 * POST   /api/club/:clubname/events     # Add new event a club
 * DELETE /api/club/:clubname/events     # Delete a event of club , Maybe it is not necessary, because we delete like this /api/club/:clubname/event/:eventid
 */
app.route('/api/club/:clubname/events')
  .get((req, res) => {
    res.send('Get all events of club')
  })
  .post((req, res) => {
    res.send('Add new event to club')
  })
  .delete((req, res) => {
    res.send('Delete a event of club')
  })

/**
 * GET    /api/club/:clubname/blog/:blogid     # Get a blog
 * PUT    /api/club/:clubname/blog/:blogid     # Update blog of club
 * DELETE /api/club/:clubname/blog/:blogid     # Delete a blog of club
 */
app.route('/api/club/:clubname/blog/:blogid')
  .get((req, res) => {
    res.send('Get a blog of club')
  })
  .put((req, res) => {
    res.send('Update blog of club')
  })
  .delete((req, res) => {
    res.send('Delete blog of club')
  })

/**
 * GET    /api/club/:clubname/event/:eventid     # Get a event
 * PUT    /api/club/:clubname/event/:eventid     # Update event of club
 * DELETE /api/club/:clubname/event/:eventid     # Delete a event of club
 */
app.route('/api/club/:clubname/event/:eventid')
  .get((req, res) => {
    res.send('Get a event of club')
  })
  .put((req, res) => {
    res.send('Update event of club')
  })
  .delete((req, res) => {
    res.send('Delete event of club')
  })

/**
 * GET    /api/club/:clubname/about     # Get a club's about
 * PUT    /api/club/:clubname/about     # Update about of club
 */
app.route('/api/club/:clubname/about')
  .get((req, res) => {
    res.send("Get a club's about")
  })
  .put((req, res) => {
    res.send('Update about of club')
  })

/**
 * # Maybe, We use S3 or Minio
 * GET    /api/club/:clubname/pic     # Get a club's pic
 * PUT    /api/club/:clubname/pic     # Update pic of club
 */
app.route('/api/club/:clubname/pic')
  .get((req, res) => {
    res.send("Get a club's pic")
  })
  .put((req, res) => {
    res.send('Update pic of club')
  })

/**
 * GET    /api/users            # Get all users' infos with filters
 * POST   /api/users            # Create new user
 */
app.route('/api/users')
  .get((req, res) => {
    res.send('Get all users')
  })
  .post((req, res) => {
    res.send('Create new user')
  })

/**
 * GET    /api/user/:username   # Get a user's all infos
 * PUT    /api/user/:username   # Update a user's all infos, maybe it is not necessary, because we seperate all updatable info.
 * DELETE /api/user/:username   # Delete user
 */
app.route('/api/user/:username')
  .get((req, res) => {
    console.log(req.params)
    res.send("Get a user's all infos")
  })
  .put((req, res) => {
    res.send("Update a user's all infos")
  })
  .delete((req, res) => {
    res.send('Delete user')
  })

/**
 * # Maybe, We use S3 or Minio
 * GET    /api/user/:username/pic     # Get a user's pic
 * PUT    /api/user/:username/pic     # Update user of club
 */
app.route('/api/user/:username/pic')
  .get((req, res) => {
    res.send("Get a user's pic")
  })
  .put((req, res) => {
    res.send('Update user of club')
  })

// We must use default user's pic and club's pic
app.listen(port, () => {
  console.log('App listening on port: ', port)
})
