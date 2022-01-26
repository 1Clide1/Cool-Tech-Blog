// import everything I need for the user routes
const router = require('express').Router();
const { User, BlogPost, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// this is where you get all users
router.get('/', (req, res) => {
  User.findAll({
      attributes: { exclude: ['password'] }
  })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// this is where you get a user by id
router.get('/:id', (req, res) => {
  User.findOne({
      attributes: { exclude: ['password']},
      where: {
        id: req.params.id
      },
      include: [
          {
            model: BlogPost,
            attributes: ['id', 'title', 'blog_content', 'created_at']
          },
          {
              model: Comment,
              attributes: ['id', 'comment_text', 'created_at'],
              include: {
                model: Post,
                attributes: ['title']
              }
          }
        ]

  })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// this is where you sign-up
router.post('/', (req, res) => {
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  })
  .then(dbUserData => {
    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;
  
      res.json(dbUserData);
    });
  });
});

// this is where you login
// I modeled this after the project login if it's not broke why try to invent the wheel :)
router.post('/login', (req, res) => {
  User.findOne({
      where: {
          email: req.body.email
      }
  }).then(dbUserData => {
      if(!dbUserData){
          res.status(404).json({ message: "No user found with this id"});
          return;
      }
      const validPW = dbUserData.checkPassword(req.body.password);

      if(!validPW){
          res.status(400).json({ message: "invalid password for user" });
          return;
      }
      
      req.session.save(() => {
          req.session.user_id = dbUserData.id;
          req.session.username = dbUserData.username;
          req.session.loggedIn = true;

          res.json({ user: dbUserData, message: 'You are now logged in!' });
      });
  }).catch(err => {
      console.log(err);
      res.status(500).json(err)
  })
});

// this is how you logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
  else {
    res.status(404).end();
  }
});

// this is where you can update users by id
router.put('/:id', withAuth, (req, res) => {
  User.update(req.body, {
      individualHooks: true,
      where: {
          id: req.params.id
    }
  })
    .then(dbUserData => {
      if (!dbUserData[0]) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// delete users
router.delete('/:id', withAuth, (req, res) => {
  User.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
