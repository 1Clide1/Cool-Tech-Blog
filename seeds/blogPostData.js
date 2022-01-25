const { BlogPost } = require('../models');

const blogPostData = [
  {
    
  },
  {
    
  },
  {
    
  },
  {
    
  },
  {
    
  },
  {
    
  },
  {
    
  },
  {
    
  },
  {
    
  }
];

const seedBlogPost = () => BlogPost.bulkCreate(blogPostData);

module.exports = seedBlogPost;
