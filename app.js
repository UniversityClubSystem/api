const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
git checkout devconst mongodb = require(path.join(__dirname, 'db', 'mongodb.js'));
const User = require(path.join(__dirname, 'models', 'user.js'));

let test = () => {
  console.log('Self execution!');
  let newuser = new User({
    fullname: 'ResAt Akcan',
    about: 'i was a child',
    pic: '/pics/4312353.jpg',
    username: 'resobyte',
    password: '123456',
    emails: ['resobyte@gmail.com']
  });
  newuser.save(err => {
    if (err) {
      console.error(err);
    } else {
      console.log('Yeah, we created new user!');
    }
  });
};
test();

app.use(logger('dev'));

var clubRoutes = require("./routes/clubs");
var usersRoutes = require("./routes/users");
var indexRoutes = require("./routes/index");

app.use(indexRoutes);
app.use("/api/user", usersRoutes);
app.use("/api/club", clubRoutes);

app.listen(port, () => {
  console.log('App listening on port: ', port);
});