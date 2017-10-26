const express = require('express');
const router = express.Router({mergeParams: true});

router.route('/')
  .get((req, res) => {
    res.send('Get all users');
  })
  .post((req, res) => {
    res.send('Create new user');
  });

router.route('/:username')
  .get((req, res) => {
    console.log(req.params);
    res.send("Get a user's all infos");
  })
  .put((req, res) => {
    res.send("Update a user's all infos");
  })
  .delete((req, res) => {
    res.send('Delete user');
  });

router.route('/:username/pic')
  .get((req, res) => {
    res.send("Get a user's pic");
  })
  .put((req, res) => {
    res.send('Update user of club');
  });

module.exports = router;
