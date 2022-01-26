// importing the needed dependencies
const router = require("express").Router();
const sequelize = require("../config/connection");
const { BlogPost, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, (req, res) => {
  BlogPost.findAll({
    where: {
      // get the user from the session that way they are able to create a blog post
      // this will be done when I want the user to access something
      user_id: req.session.user_id,
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
      // makes the data useable that way I can display it properly on the website
      const blogPosts = dbBlogPostData.map((blogPost) =>
        blogPost.get({ plain: true })
      );
      res.render("dashboard", { blogPosts, loggedIn: true });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/edit-blogpost/:id", withAuth, (req, res) => {
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
        res
          .status(404)
          .json({ message: "No blog post was found with this id" });
        return;
      }

      // same concept as above making the data useable that way I can display it on the website
      const blogPost = dbBlogPostData.get({ plain: true });

      res.render("edit-blogpost", {
        blogPost,
        loggedIn: true,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/create-blogpost/", withAuth, (req, res) => {
  BlogPost.findAll({
    where: {
      user_id: req.session.user_id,
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
      const blogPosts = dbBlogPostData.map((blogPost) =>
        blogPost.get({ plain: true })
      );
      res.render("create-blogpost", { blogPosts, loggedIn: true });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
