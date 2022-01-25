// import the seed data and sequelize
const sequelize= require('../config/connection');
const seedComment= require('./commentData');
const seedBlogPost= require('./blogPostData');
const seedUser= require('./userData');

// this is how the seeds are run
const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedBlogPost();

  await seedComment();

  await seedUser();

  process.exit(0);
};

seedAll();
