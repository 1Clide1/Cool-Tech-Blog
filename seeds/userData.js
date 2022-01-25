const { User } = require('../models');

const userData = [
  {
    username: "Brandon",
    email: "brandon@gmail.com",
    password: "password"
  },
  {
    username: "Clide",
    email: "clide@gmail.com",
    password: "password"
  },
  {
    username: "Randy",
    email: "randy@gmail.com",
    password: "password"
  },
  {
    username: "John",
    email: "jojo@gmail.com",
    password: "password"
  }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
