const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
const mongodb = require(path.join(__dirname, 'db', 'mongodb.js'));
const User = require(path.join(__dirname, 'models', 'user.js'));
const clubRoutes = require(path.join(__dirname, 'routes', 'clubs'));
const usersRoutes = require(path.join(__dirname, 'routes', 'users'));

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
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Api running!');
});
app.use("/api/user", usersRoutes);
app.use("/api/club", clubRoutes);

app.listen(port, () => {
  console.log('App listening on port: ', port);
});
