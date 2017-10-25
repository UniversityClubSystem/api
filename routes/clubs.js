const express = require('express');
const bodyParser = require('body-parser');
var router = express.Router({mergeParams: true});
router.use(bodyParser.json());

router.route('/').get((req, res) => {
  res.send('Get all clubs');
}).post((req, res) => {
  res.send('Create new club');
});

router.route('/:clubname').get((req, res) => {
  console.log(req.params);
  console.log(req.params.clubname);
  res.send("Get a club's all infos");
}).put((req, res) => {
  res.send("Update a club's all infos");
}).delete((req, res) => {
  res.send('Delete club');
});

router.route('/:clubname/members').get((req, res) => {
  res.send('Get all members of club');
}).post((req, res) => {
  res.send('Add new member to club');
}).delete((req, res) => {
  res.send('Delete a member of club');
});

router.route('/:clubname/admins').get((req, res) => {
  res.send('Get all admins of club');
}).post((req, res) => {
  res.send('Add new admin to club');
}).delete((req, res) => {
  res.send('Delete a admin of club');
});

router.route('/:clubname/blogs').get((req, res) => {
  res.send('Get all blogs of club');
}).post((req, res) => {
  res.send('Add new blog to club');
}).delete((req, res) => {
  res.send('Delete a blog of club');
});

router.route('/:clubname/events').get((req, res) => {
  res.send('Get all events of club');
}).post((req, res) => {
  res.send('Add new event to club');
}).delete((req, res) => {
  res.send('Delete a event of club');
});

router.route('/:clubname/blog/:blogid').get((req, res) => {
  res.send('Get a blog of club');
}).put((req, res) => {
  res.send('Update blog of club');
}).delete((req, res) => {
  res.send('Delete blog of club');
});

router.route('/api/club/:clubname/event/:eventid').get((req, res) => {
  res.send('Get a event of club');
}).put((req, res) => {
  res.send('Update event of club');
}).delete((req, res) => {
  res.send('Delete event of club');
});

router.route('/api/club/:clubname/about').get((req, res) => {
  res.send("Get a club's about");
}).put((req, res) => {
  res.send('Update about of club');
});

router.route('/api/club/:clubname/pic').get((req, res) => {
  res.send("Get a club's pic");
}).put((req, res) => {
  res.send('Update pic of club');
});
module.exports = router;