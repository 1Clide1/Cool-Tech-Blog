const { Comment } = require('../models');

const commentData = [
  {
    user_id: 1,
    blogpost_id: 1,
    comment_text: "feel free to comment here :)"
  },
  {
    user_id: 3,
    blogpost_id: 2,
    comment_text: "Nice!!"
  },
  {
    user_id: 2,
    blogpost_id: 3,
    comment_text: "dang that's pretty cool"
  },
  {
    user_id: 1,
    blogpost_id: 4,
    comment_text: "they are dope, go for it!"
  }
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;
