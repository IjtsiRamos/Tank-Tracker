const { User} = require('../models');

const userdata = [
  {
    username: 'Emilio',
    email: 'emilio@gmail.com',
    password: 'password1',
  },
  {
    username: 'User2',
    email: 'ijtsiramos96@gmail.com',
    password: 'password2',
  },

];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;

