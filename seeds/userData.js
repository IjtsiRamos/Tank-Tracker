const { User} = require('../models');

const userdata = [
  {
    username: 'User1',
    email: 'user1@gmail.com',
    password: 'password1',
  },
  {
    username: 'User2',
    email: 'user2@gmail.com',
    password: 'password2',
  },

];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;

