// import the needed dependencies
const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");
// this is where you get all of the comments
router.get("/", (req, res) => {
  Comment.findAll()
    .then((dbCommentData) => res.json(dbCommentData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
// this route is how you are able to post a comment
router.post("/", withAuth, (req, res) => {
  // check if the user is in session
  if (req.session) {
    Comment.create({
      comment_text: req.body.comment_text,
      blogpost_id: req.body.blogpost_id,
      // use the user's id from the session
      user_id: req.session.user_id,
    })
      .then((dbCommentData) => res.json(dbCommentData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  }
});
// this is how you are able to delete comments
// not sure if I am going to actually add a delete comments button to the webiste but if I want one in the future I can
router.delete("/:id", withAuth, (req, res) => {
  Comment.destroy({
    where: {
      blogpost_id: req.params.id,
    },
  })
    .then((dbCommentData) => {
      if (!dbCommentData) {
        res
          .status(404)
          .json({ message: "There is no comment found with this id" });
        return;
      }
      res.json(dbCommentData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
// forgot to add this very important export
module.exports = router;
