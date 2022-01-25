const { BlogPost } = require('../models');

const blogPostData = [
  {
    title: "Welcome To My Tech Blog!!",
    blog_content: "Thanks for viewing my site, as you can see, here I talk about cool tech that intrests me. Feel free to sign-up and contribute to the site too!",
    user_id: 1
  },
  {
    title: "Microsoft Bought Activision?",
    blog_content: "If you haven't heard already, according to an article from PC Gamer, Microsoft really bought Activision out. Hopefully this means free Call of Duty on gamepass.",
    user_id: 2
  },
  {
    title: "Looks Like The Metaverse Is Becoming A Real Thing",
    blog_content: "With NFTs on the rise and facebook jumping into the mix with their own metaverse things are becoming really interesting. I wonder in the future if we are all going to be meeting in virtual coffe shops soon. Man the future is looking sick!!",
    user_id: 3
  },
  {
    title: "Thinking About Buying An NFT, Is It Too Late?",
    blog_content: "Might be too late on the craze but it would be dope to get one, what do you guys think? Go for it or nah? Getting one would be cool but screenshotting is always free tho...",
    user_id: 4
  }
];

const seedBlogPost = () => BlogPost.bulkCreate(blogPostData);

module.exports = seedBlogPost;
