const router = require("express").Router();
const sequelize = require("../config/connection");
const { BlogPost, User, Comment } = require("../models");

router.get("/", (req, res) => {
  BlogPost.findAll({
    attributes: ["id", "title", "created_at", "blog_content"],
    include: [
      {
        model: Comment,
        attributes: [
          "id",
          "comment_text",
          "blogpost_id",
          "user_id",
          "created_at",
        ],
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    // using dbData as a universal since I am using multiple models
    .then((dbData) => {
      const blogPosts = dbData.map((blogPost) => blogPost.get({ plain: true }));
      res.render("homepage", {
        blogPosts,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/login", (req, res) => {
  // this means if you are already logged in then you will be directed back to the home page
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});

router.get("/blogpost/:id", (req, res) => {
  BlogPost.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "title", "created_at", "blog_content"],
    include: [
      {
        model: Comment,
        attributes: [
          "id",
          "comment_text",
          "blogpost_id",
          "user_id",
          "created_at",
        ],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbBlogPostData) => {
      if (!dbBlogPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }

      // this makes the data useable that way I can pass it to the webiste
      // converting the data using toJSON also works but I think this is more of the conventional way of doing it
      const blogPost = dbBlogPostData.get({ plain: true });

      // once the data is useable then I can pass it into the handlebars template that I made
      res.render("blogpost", {
        blogPost,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
