// import the seed data and sequelize
const sequelize= require('../config/connection');
const seedComment= require('./commentData');
const seedBlogPost= require('./blogPostData');
const seedUser= require('./userData');

// this is how the seeds are run
// make sure the seeds are in order that way it is able to be seeded properly
const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();
  console.log('\n----- USER SEEDED -----\n');

  await seedBlogPost();
  console.log('\n----- BLOGPOST SEEDED -----\n');

  await seedComment();
  console.log('\n----- COMMENTS SEEDED -----\n');
  process.exit(0);
};

seedAll();
