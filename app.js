const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;
const mongodb = require(__dirname + '/db/mongodb.js');
const User = require(__dirname + '/models/user.js');

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

app
  .route('/api/clubs')
  .get((req, res) => {
    res.send('Get all clubs');
  })
  .post((req, res) => {
    res.send('Create new club');
  });

app
  .route('/api/club/:clubname')
  .get((req, res) => {
    console.log(req.params);
    console.log(req.params.clubname);
    res.send("Get a club's all infos");
  })
  .put((req, res) => {
    res.send("Update a club's all infos");
  })
  .delete((req, res) => {
    res.send('Delete club');
  });

app
  .route('/api/club/:clubname/members')
  .get((req, res) => {
    res.send('Get all members of club');
  })
  .post((req, res) => {
    res.send('Add new member to club');
  })
  .delete((req, res) => {
    res.send('Delete a member of club');
  });

app
  .route('/api/club/:clubname/admins')
  .get((req, res) => {
    res.send('Get all admins of club');
  })
  .post((req, res) => {
    res.send('Add new admin to club');
  })
  .delete((req, res) => {
    res.send('Delete a admin of club');
  });

app
  .route('/api/club/:clubname/blogs')
  .get((req, res) => {
    res.send('Get all blogs of club');
  })
  .post((req, res) => {
    res.send('Add new blog to club');
  })
  .delete((req, res) => {
    res.send('Delete a blog of club');
  });

app
  .route('/api/club/:clubname/events')
  .get((req, res) => {
    res.send('Get all events of club');
  })
  .post((req, res) => {
    res.send('Add new event to club');
  })
  .delete((req, res) => {
    res.send('Delete a event of club');
  });

app
  .route('/api/club/:clubname/blog/:blogid')
  .get((req, res) => {
    res.send('Get a blog of club');
  })
  .put((req, res) => {
    res.send('Update blog of club');
  })
  .delete((req, res) => {
    res.send('Delete blog of club');
  });

app
  .route('/api/club/:clubname/event/:eventid')
  .get((req, res) => {
    res.send('Get a event of club');
  })
  .put((req, res) => {
    res.send('Update event of club');
  })
  .delete((req, res) => {
    res.send('Delete event of club');
  });

app
  .route('/api/club/:clubname/about')
  .get((req, res) => {
    res.send("Get a club's about");
  })
  .put((req, res) => {
    res.send('Update about of club');
  });

app
  .route('/api/club/:clubname/pic')
  .get((req, res) => {
    res.send("Get a club's pic");
  })
  .put((req, res) => {
    res.send('Update pic of club');
  });

app
  .route('/api/users')
  .get((req, res) => {
    res.send('Get all users');
  })
  .post((req, res) => {
    res.send('Create new user');
  });

app
  .route('/api/user/:username')
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

app
  .route('/api/user/:username/pic')
  .get((req, res) => {
    res.send("Get a user's pic");
  })
  .put((req, res) => {
    res.send('Update user of club');
  });

app.listen(port, () => {
  console.log('App listening on port: ', port);
});
