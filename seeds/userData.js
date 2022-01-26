const { User } = require('../models');

const userData = [
  {
    username: 'Brandon',
    email: 'brandon@gmail.com',
    password: '@password123'
  },
  {
    username: 'Clide',
    email: 'clide@gmail.com',
    password: 'password123'
  },
  {
    username: 'Randy',
    email: 'randy@gmail.com',
    password: "password123"
  },
  {
    username: 'John',
    email: 'jojo@gmail.com',
    password: 'password123'
  }
];
// absolutely need the individual hooks to not only keep the passwords protected but also for the login it even work
const seedUser = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUser;
