// import what I need
const router = require("express").Router();
const { BlogPost, User, Comment } = require("../../models");
const sequelize = require("../../config/connection");
const withAuth = require("../../utils/auth");
// get everything that is associated with the blog post
router.get("/", (req, res) => {
  BlogPost.findAll({
    attributes: ["id", "title", "created_at", "blog_content"],
    order: ["created_at"],
    include: [
      // include the comments and the user model since they are both related to the blog post
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
    //   im including a lot of models so I am just going to assume you know I am getting this from my database so that is why this var is called dbData
    .then((dbData) => res.json(dbData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
// this is almost the samething as above however I am getting everything that is associated with the blog post through the id
router.get("/:id", (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "title", "created_at", "blog_content"],
    include: [
      // again include the comments and user model here too because I need the comments and the user data
      {
        model: User,
        attributes: ["username"],
      },
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
    ],
  })
    //   again same thing as above using the generic dbData var
    .then((dbData) => {
      if (!dbData) {
        res
          .status(404)
          .json({ message: "There is no blog post found with this id" });
        return;
      }
      res.json(dbData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
// this route here is where you are able to create a blog post
router.post("/", withAuth, (req, res) => {
  BlogPost.create({
    title: req.body.title,
    blog_content: req.body.blog_content,
    user_id: req.session.user_id,
  })
    //   since this is only about creating a blog post I am saying with the variable where it came from
    .then((dbBlogPostData) => res.json(dbBlogPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
// this route will update the blogpost according to it's id
router.put("/:id", withAuth, (req, res) => {
  BlogPost.update(
    {
      title: req.body.title,
      blog_content: req.body.blog_content,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbBlogPostData) => {
      if (!dbBlogPostData) {
        res
          .status(404)
          .json({ message: "There is no blog post found with this id" });
        return;
      }
      res.json(dbBlogPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
// this is how you will be able to delete the blog post. looks for the blog post id and then it destroys it!!
router.delete("/:id", withAuth, (req, res) => {
  BlogPost.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbBlogPostData) => {
      if (!dbBlogPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbBlogPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
