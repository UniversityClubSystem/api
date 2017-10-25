const express = require('express');
const bodyParser = require('body-parser');
var router = express.Router({mergeParams: true});
router.use(bodyParser.json());

router.route('/api/users').get((req, res) => {
  res.send('Get all users');
}).post((req, res) => {
  res.send('Create new user');
});

router.route('/api/user/:username').get((req, res) => {
  console.log(req.params);
  res.send("Get a user's all infos");
}).put((req, res) => {
  res.send("Update a user's all infos");
}).delete((req, res) => {
  res.send('Delete user');
});

router.route('/api/user/:username/pic').get((req, res) => {
  res.send("Get a user's pic");
}).put((req, res) => {
  res.send('Update user of club');
});

module.exports = router;